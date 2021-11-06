import * as React from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Box, Icon, makeStyles, Text, useAppTheme } from 'components';
import { Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '@components/Button';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/core';
import RNFS from 'react-native-fs';
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
    const [uri, setUri] = React.useState("");
    const [response, setResponse] = React.useState<any>(null);
    const cameraRef = React.useRef();
    const { goBack } = useNavigation();
    const onButtonPress = React.useCallback(async (type, options) => {
        if (type === 'capture') {
            if (await requestCameraPermission()) {
                launchCamera(options, setResponse);
            }
        } else {
            launchImageLibrary(options, setResponse);
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
            setUri(pictureURI);
            const base64 = await getBase64(uri);
            console.log('base64: ', base64);
        }
    };
    return (
        <Box flex={1}>
            <Box flex={4}>
                {!uri && <RNCamera
                    style={{ flex: 1, alignItems: 'center' }}
                    ref={cameraRef} />}
            </Box>
            <Box
                flex={1}
                borderTopLeftRadius={50}
                borderTopRightRadius={50}
                backgroundColor="white">
                <Box flexDirection="row" justifyContent="space-around">
                    <TouchableOpacity style={styles.button} onPress={() => {
                        takePicture();
                    }}>
                        <Icon name="camera" color={theme.colors.blue} size={22} />
                        <Text variant="smallPrimary">Capture</Text>
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
                    <Button {...{ btnText: "Submit", onPress: () => { } }} />
                </Box>
            </Box>
        </Box>
    );
};

export default UploadTestingKit;