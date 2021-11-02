import * as React from 'react';
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
    }),
);

const TakeTest = () => {
    const styles = useStyles();
    const theme = useAppTheme();
    const camera = React.useRef();
    const [response, setResponse] = React.useState<any>(null);

    const onButtonPress = React.useCallback((type, options) => {
        if (type === 'capture') {
            launchCamera(options, setResponse);
        } else {
            launchImageLibrary(options, setResponse);
        }
    }, []);
    return (
        <LayoutWithLogo>
            <Box margin="l" flex={1} borderRadius={10}>
                <Box
                    style={styles.shadow}
                    backgroundColor="white"
                    padding="m"
                    borderRadius={3}
                    justifyContent="center">
                    <Text variant="largePrimaryBold">Taking the Test</Text>
                </Box>
                <Box
                    flex={1}
                    backgroundColor="backgroundGrey"
                    borderBottomRightRadius={10}
                    borderBottomLeftRadius={10}>
                    <Box flex={1} margin="m" justifyContent="center">
                        <Text variant="mediumPrimary"> Please take a photo of picture paper from your passport</Text>
                    </Box>
                    <Box flex={2}>
                        <Image style={{ flex: 1 }} source={require('@assets/passport.png')} />
                    </Box>
                    <Box flex={1} justifyContent="flex-end" marginVertical="m">
                        <Box justifyContent="center" alignItems="center" marginVertical="s">
                            <Icon name="camera" color={theme.colors.blue} size={22} />
                            <Text variant="smallPrimary">Capture</Text>
                        </Box>
                        <Box marginHorizontal="m">
                            <Button {...{ btnText: "Submit", onPress: () => { } }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </LayoutWithLogo>
    );
};

export default TakeTest;