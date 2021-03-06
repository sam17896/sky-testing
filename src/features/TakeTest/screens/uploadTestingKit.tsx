import * as React from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Box, Icon, makeStyles, Text, useAppTheme } from 'components';
import { Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '@components/Button';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';
import Endpoints from '@constant/Endpoint';
import { useRoute } from '@react-navigation/core';
import useRequest from '@hooks/useRequest';
import useAuth from '@hooks/useAuth';
const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        shadow: {
            elevation: theme.spacing.xxs,
            shadowOpacity: 0.5,
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 2, height: 2 },
        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: theme.spacing.s
        }
    }),
);

const UploadTestingKit = () => {
    const styles = useStyles();
    const theme = useAppTheme();
    const { params: { passenger } } = useRoute();
    const [imageURI, setImageUri] = React.useState(null);
    const cameraRef = React.useRef();
    const [loading, setLoading] = React.useState(false);
    const request = useRequest();
    const { user } = useAuth();
    const onButtonPress = React.useCallback(async (type, options) => {
        if (type === 'capture') {
            if (await requestCameraPermission()) {
                launchCamera(options, (res) => {

                });
            }
        } else {
            launchImageLibrary(options, (res) => {
                if (res && res.assets && res.assets.length > 0) {
                    setImageUri(res?.assets[0]?.uri);
                }
            });
        }
    }, []);

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    };
    const getBase64 = async (imageUri: string) => {
        const filepath = imageUri.split('//')[1];
        const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
        return `data:image/jpeg;base64,${imageUriBase64}`;
    };
    const takePicture = async () => {
        if (cameraRef && cameraRef.current) {
            // @ts-ignore
            const { uri: pictureURI } = await cameraRef.current.takePictureAsync();
            setImageUri(pictureURI);
            const base64 = await getBase64(pictureURI);
            console.log('base64: ', base64);
        }
    };

    const Submit = async () => {
        setLoading(true);
        const base64 = await getBase64(imageURI);
        console.log('base64: ', base64);
        request(Endpoints.UploadImage, {
            method: "POST",
            body: {
                "documentTypeId": 2,
                "orderId": passenger?.orderId,
                "orderLineId": passenger?.orderLineId,
                "passengerId": passenger?.id,
                "image": base64,
                "fileName": "lateral.jpg",
                "contentType": "image/jpg",
                "dateResultTest": "2021-11-09T18:51:00.087Z"
            },
            headers: { "Authorization": `Bearer ${user?.token}` }
        }).then(res => {
            console.log({ res });
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.log({ err });
        });
    }
    return (
        <Box flex={1}>
            <Box flex={4}>
                {!imageURI && <RNCamera style={{ flex: 1, alignItems: 'center' }} ref={cameraRef} />}
                {imageURI && imageURI !== "" && <Box flex={1}>
                    <Image style={{ flex: 1 }} source={{ uri: imageURI }} />
                </Box>}
            </Box>
            <Box
                flex={1}
                borderTopLeftRadius={50}
                borderTopRightRadius={50}
                backgroundColor="white">
                <Box flexDirection="row" justifyContent="space-around">
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (imageURI) {
                            setImageUri(null);
                        } else {
                            takePicture();
                        }
                    }}>
                        <Icon name="camera" color={theme.colors.blue} size={22} />
                        <Text variant="smallPrimary">{imageURI ? 'Take Another' : 'Capture'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        onButtonPress('upload', {
                            saveToPhotos: true,
                            mediaType: 'photo',
                            includeBase64: false,
                        });
                    }}>
                        <Icon name="upload" color={theme.colors.blue} size={22} />
                        <Text variant="smallPrimary">Upload</Text>
                    </TouchableOpacity>
                </Box>
                <Box marginHorizontal="m">
                    <Button {...{ btnText: "Submit", loading, onPress: () => { Submit(); } }} />
                </Box>
            </Box>
        </Box>
    );
};

export default UploadTestingKit;
