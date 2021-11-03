import * as React from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Box, Icon, makeStyles, Text, useAppTheme } from 'components';
import { Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from '@components/Button';
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

const UploadPassport = () => {
    const styles = useStyles();
    const theme = useAppTheme();
    const [response, setResponse] = React.useState<any>(null);

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
    return (
        <Box flex={1}>
            <Image
                style={{
                    position: 'absolute',
                    flex: 1
                }}
                source={require("@assets/testing-tube.png")} />
            <Box flex={4}>
                {/* <Image style={{ flex: 1 }} source={require("@assets/testing-tube.png")} /> */}
            </Box>
            <Box
                flex={1}
                borderTopLeftRadius={50}
                borderTopRightRadius={50}
                backgroundColor="white">
                <Box flexDirection="row" justifyContent="space-around">
                    <TouchableOpacity style={styles.button} onPress={() => {
                        onButtonPress('capture', {
                            saveToPhotos: true,
                            mediaType: 'photo',
                            includeBase64: false,
                        });
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
                    <Button {...{
                        btnText: "Submit", onPress: () => {
                            onButtonPress('capture', {
                                saveToPhotos: true,
                                mediaType: 'photo',
                                includeBase64: false,
                            });
                        }
                    }} />

                </Box>
            </Box>
        </Box>
    );
};

export default UploadPassport;