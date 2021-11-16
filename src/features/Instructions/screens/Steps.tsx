import * as React from 'react';
import { Box, Icon, makeStyles, Text, useAppTheme } from 'components';
import LayoutWithLogo from '@components/LayoutWithLogo';
import LayoutBorder from '@components/LayoutBorder';
import { Image, StyleSheet } from 'react-native';
import Button from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';
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
            borderRadius: 15,
        },
    }),
);
const steps = [
    {
        image: require('@assets/step1.png'),
        header: 'Insert the tube into the workstation',
        description: 'Insert the tube into the workstation provided with the kit.'
    },
    {
        image: require('@assets/step2.png'),
        header: 'Nasal specimen collection',
        description: '1. Using the sterile swab provided, carefully insert the swab into one nostril.'
    },
    {
        image: require('@assets/step3.png'),
        header: 'Nasal specimen collection',
        description: '1. Using the sterile swab provided, carefully insert the swab into one nostril.'
    },
    {
        image: require('@assets/step4.png'),
        header: 'Nasal specimen collection',
        description: '1. Using the sterile swab provided, carefully insert the swab into one nostril.'
    },
    {
        image: require('@assets/step5.png'),
        header: 'Nasal specimen collection',
        description: '1. Using the sterile swab provided, carefully insert the swab into one nostril.'
    },
    {
        image: require('@assets/step6.png'),
        header: 'Nasal specimen collection',
        description: '1. Using the sterile swab provided, carefully insert the swab into one nostril.'
    }
];
const Steps = () => {
    const styles = useStyles();
    const { navigate, goBack } = useNavigation();
    const theme = useAppTheme();
    const { params } = useRoute();
    const [index, setIndex] = React.useState(0);
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
                    <Box flex={1}>
                        <Image source={steps[index]?.image} />
                    </Box>
                    <Box flex={1}>
                        <Box flex={1} alignItems="center">
                            <Text variant="largePrimaryBold">Step {index + 1}</Text>
                        </Box>
                        <Box flex={3} paddingHorizontal="m">
                            <Text variant="smallPrimaryBold">{steps[index]?.header}</Text>
                            <Text variant="xxsmallPrimary" textAlign="justify">
                                {steps[index]?.description}
                            </Text>
                        </Box>
                        <Box flex={1} flexDirection="row" justifyContent="space-around">

                            {index > 0 &&
                                <Box flex={1} paddingHorizontal="s">
                                    <Button {...{ btnText: "Previous Step", onPress: () => { setIndex(prev => prev - 1); } }} />
                                </Box>
                            }
                            {index !== (steps.length - 1) &&
                                <Box flex={1} paddingHorizontal="s">
                                    <Button {...{ btnText: "Next Step", onPress: () => { setIndex(prev => prev + 1); } }} />
                                </Box>
                            }
                            {index === (steps.length - 1) &&
                                <Box flex={1} paddingHorizontal="s">
                                    <Button {...{ btnText: "Upload Documents", onPress: () => { navigate('upload-document', { passenger: params?.passenger }); } }} />
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>

            </LayoutBorder>
        </LayoutWithLogo>
    )
}

export default Steps;