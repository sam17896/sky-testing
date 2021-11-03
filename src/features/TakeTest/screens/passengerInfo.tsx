import { Box, Text } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import Title from '@components/Title';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import { useNavigation } from '@react-navigation/core';

const PassengerInfo = () => {
    const { navigate } = useNavigation();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: 'Submit Passenger Info' }} />
                    <Box
                        flex={1}
                        backgroundColor="backgroundGrey"
                        borderBottomRightRadius={10}
                        borderBottomLeftRadius={10}>
                        <Box flex={1} margin="m" justifyContent="center">
                            <Text variant="smallPrimary"
                                textAlign="justify">
                                Are you ready to take your test and submit your passenger information?
                            </Text>
                        </Box>
                        <Box flex={2}>
                            <TextInput {...{
                                label: 'First Name',
                                placeholder: 'Enter First Name'
                            }} />
                            <TextInput {...{
                                label: 'Sur Name',
                                placeholder: 'Enter Sur Name'
                            }} />
                            <TextInput {...{
                                label: 'Passport Number',
                                placeholder: 'Enter Passport Number'
                            }} />
                        </Box>
                        <Box flex={1} justifyContent="flex-end" marginVertical="m">
                            <Box marginHorizontal="m">
                                <Button {...{
                                    btnText: "Submit", onPress: () => { navigate('instructions') }
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    )
}

export default PassengerInfo;