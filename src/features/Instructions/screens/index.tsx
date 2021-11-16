import Button from '@components/Button';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Icon, Text, useAppTheme } from 'components';
import { Box, makeStyles } from 'components';
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');
const useStyles = makeStyles((theme) =>
    StyleSheet.create({
        shadow: {
            elevation: theme.spacing.xxs,
            shadowOpacity: 0.5,
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 2, height: 2 },
        },
        dot: {
            backgroundColor: 'rgba(0,0,0,.2)', width: 15, height: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
        },
        activeDot: {
            backgroundColor: theme.colors.blue, width: 15, height: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
        },
        button: {
            backgroundColor: theme.colors.blue,
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
        }
    }),
);

const Instruction = () => {
    const theme = useAppTheme();
    const styles = useStyles();
    const ref = React.useRef();
    const { params } = useRoute();
    const { navigate, goBack } = useNavigation();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box
                    flex={1}
                    backgroundColor="backgroundGrey"
                    margin="m"
                    borderRadius={5}
                    style={styles.shadow}>
                    <Box
                        style={styles.shadow}
                        backgroundColor="white"
                        padding="m"
                        flexDirection="row"
                        borderRadius={3}
                        alignItems="center">
                        <Icon name="arrow-left" style={{ paddingHorizontal: theme.spacing.s }} size={18} color={theme.colors.blue} onPress={() => { goBack() }} />
                        <Text variant="largePrimaryBold">How to Use Your Kit</Text>
                    </Box>
                    <Box flex={1} >
                        <Video
                            source={require("@assets/big_buck_bunny.mp4")}   // Can be a URL or a local file.
                            ref={ref}
                            onBuffer={() => { }}                // Callback when remote video is buffering
                            style={{
                                flex: 1,
                            }}
                            resizeMode="cover"                          // Store reference
                            onError={(e) => { console.log({ e }); }} />
                    </Box>
                    <Box padding="s" flex={2}>
                        <Swiper
                            showsPagination={true}
                            showsButtons={true}
                            loop={false}
                            dot={<View style={styles.dot} />}
                            activeDot={<View style={styles.activeDot} />}
                            activeDotColor={theme.colors.blue}
                            nextButton={
                                <Box style={styles.button}>
                                    <Icon name="arrow-right" color={'white'} size={12} />
                                </Box>
                            }
                            prevButton={
                                <Box style={styles.button}>
                                    <Icon name="arrow-left" color={'white'} size={14} />
                                </Box>}>
                            <Box justifyContent="center" flex={1} alignItems="center" paddingHorizontal="xxl">
                                <Text variant="mediumPrimaryBold">THE PREPARATION STAGE</Text>
                                <Text variant="xsmallPrimary" textAlign="justify">
                                    Before you begin ensure that you are in a well-lit, disturbance-free room.
                                    Next, carefully lay out all the testing equipment, and wash your hands to avoid contamination.
                                </Text>
                            </Box>
                            <Box justifyContent="center" flex={1} alignItems="center" paddingHorizontal="xxl">
                                <Text variant="mediumPrimaryBold">TAKING THE TEST</Text>
                                <Text variant="xsmallPrimary" textAlign="justify">
                                    In order for us to issue a certificate, it is mandatory to record youself taking the test. Prepare your phone so that you can record youself taking the test.
                                </Text>
                            </Box>
                            <Box justifyContent="center" flex={1} alignItems="center" paddingHorizontal="xxl">
                                <Text variant="mediumPrimaryBold">Just swab, roll, squeeze, then read!</Text>
                                <Text variant="xsmallPrimary" textAlign="justify">
                                    When you are ready, using your smartphone device, please start the video of youself taking the test.
                                </Text>
                            </Box>
                        </Swiper>
                        <Button {...{ btnText: "SEE STEPS", onPress: () => { navigate('Steps', { passenger: params?.passenger }) } }} />
                    </Box>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default Instruction;