import * as React from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Box, Icon, makeStyles, Text, useAppTheme } from 'components';
import { StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '@components/Button';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';
import Video from 'react-native-video';

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

const UploadVideo = () => {
    const styles = useStyles();
    const theme = useAppTheme();
    const [uri, setUri] = React.useState(null);
    const [record, setRecord] = React.useState(false);
    const cameraRef = React.useRef();
    const ref = React.useRef();
    const onButtonPress = React.useCallback(async (type, options) => {
        if (type === 'capture') {
            if (await requestCameraPermission()) {
                launchCamera(options, (res) => {

                });
            }
        } else {
            launchImageLibrary(options, (res) => {
                if (res && res.assets && res.assets.length > 0) {
                    setUri(res?.assets[0]?.uri);
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
    const startRecording = async () => {
        // default to mp4 for android as codec is not set
        if (cameraRef && cameraRef.current) {
            setRecord(true);
            try {
                // @ts-ignore
                const { uri: VideoUri } = await cameraRef?.current.recordAsync();
                const base64 = await getBase64(VideoUri);
                setUri(VideoUri);
                console.log({ base64 });
            } catch (e) {
                console.log({ e });
            }
        }
    }
    const stopRecording = () => {
        if (cameraRef && cameraRef.current) {
            // @ts-ignore
            cameraRef?.current.stopRecording();
            setRecord(false);
        }
    };
    return (
        <Box flex={1}>
            <Box flex={4}>
                {!uri && <RNCamera
                    style={{ flex: 1, alignItems: 'center' }}
                    ref={cameraRef}
                />}
                {uri && <Box flex={1} >
                    <Video
                        source={{ uri }}   // Can be a URL or a local file.
                        ref={ref}
                        onBuffer={() => { }}                // Callback when remote video is buffering
                        style={{
                            flex: 1,
                        }}                                   // Store reference
                        onError={(e) => { console.log({ e }); }} />
                </Box>}
            </Box>
            <Box
                flex={1}
                borderTopLeftRadius={50}
                borderTopRightRadius={50}
                backgroundColor="white">
                <Box flexDirection="row" justifyContent="space-around">
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (!record && !uri) {
                            startRecording();
                        } else if (record && !uri) {
                            stopRecording();
                        } else {
                            setUri(null);
                        }
                    }}>
                        <Icon name="camera" color={theme.colors.blue} size={22} />
                        <Text variant="smallPrimary">{uri ? 'Record Another' : record ? 'Stop Recording' : 'Start Recording'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        onButtonPress('upload', {
                            saveToPhotos: true,
                            mediaType: 'video',
                            includeBase64: false,
                        });
                    }}>
                        <Icon name="upload" color={theme.colors.blue} size={22} />
                        <Text variant="smallPrimary">Upload</Text>
                    </TouchableOpacity>
                </Box>
                <Box marginHorizontal="m">
                    <Button {...{
                        btnText: "Submit", onPress: () => { }
                    }} />
                </Box>
            </Box>
        </Box>
    );
};

export default UploadVideo;