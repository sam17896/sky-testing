import Button from '@components/Button';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Icon, Text, useAppTheme } from 'components';
import { Box } from 'components';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';

const Instruction = () => {
    const theme = useAppTheme();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} backgroundColor="backgroundGrey" margin="m" borderRadius={5}

                    style={{
                        elevation: theme.spacing.xxs,
                        shadowOpacity: 0.5,
                        shadowRadius: theme.spacing.xxs,
                        shadowColor: theme.colors.shadow,
                        shadowOffset: { width: 2, height: 2 },
                    }}>
                    <Box style={{
                        elevation: theme.spacing.xxs,
                        shadowOpacity: 0.5,
                        shadowRadius: theme.spacing.xxs,
                        shadowColor: theme.colors.shadow,
                        shadowOffset: { width: 2, height: 2 },
                    }} backgroundColor="white" padding="m"
                        borderRadius={3} justifyContent="center">
                        <Text variant="largePrimaryBold">How to Use Your Kit</Text>
                    </Box>
                    <Box flex={1}>
                    </Box>
                    <Box padding="s" flex={2}>
                        <Swiper
                            showsPagination={true}
                            showsButtons={true}
                            loop={false}
                            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 15, height: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                            activeDot={<View style={{ backgroundColor: theme.colors.blue, width: 15, height: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                            activeDotColor={theme.colors.blue}
                            nextButton={
                                <Box style={{
                                    backgroundColor: theme.colors.blue,
                                    width: 20,
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 15
                                }}>
                                    <Icon name="arrow-right" color={'white'} size={12} />
                                </Box>
                            }
                            prevButton={
                                <Box style={{
                                    backgroundColor: theme.colors.blue,
                                    width: 20,
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 15
                                }}>
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
                        <Button {...{ btnText: "SIGN IN", onPress: () => { } }} />
                    </Box>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo >
    );
};

export default Instruction;