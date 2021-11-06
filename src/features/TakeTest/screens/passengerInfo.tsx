import { Box, Text, useAppTheme } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Title from '@components/Title';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import { useNavigation, useRoute } from '@react-navigation/core';
import useGetPassengerInfo from '@hooks/TakeTest/useGetPassengerInfo';

const PassengerInfo = () => {
    const { navigate } = useNavigation();
    const theme = useAppTheme();
    const { params: { item } } = useRoute();
    const [passengerItem, setPassengerItem] = React.useState({
        firstName: "",
        lastName: "",
        passportNumber: ""
    });

    React.useEffect(() => {
        if (item) {
            console.log({ item });
            setPassengerItem({
                firstName: item?.firstName,
                lastName: item?.lastName,
                passportNumber: item?.passportNumber
            });
        }
    }, [item]);


    const updatePassengerInfo = (key: string, value: string) => {
        setPassengerItem(prev => {
            return {
                ...prev,
                [key]: value,
            };
        });
    };

    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: 'Submit Passenger Info' }} />
                    <KeyboardAvoidingView
                        style={{
                            flex: 1,
                            backgroundColor: theme.colors.backgroundGrey,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10
                        }}
                        behavior={Platform.OS === "ios" ? "padding" : null}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 20}>
                        <Box flex={1} margin="m" justifyContent="center">
                            <Text variant="smallPrimary"
                                textAlign="justify">
                                Are you ready to take your test and submit your passenger information?
                            </Text>
                        </Box>
                        <Box flex={3}>
                            <ScrollView style={{ flex: 1 }}>
                                <TextInput {...{
                                    label: 'First Name',
                                    value: passengerItem?.firstName,
                                    onChangeText: (text: string) => { updatePassengerInfo('firstName', text); },
                                    placeholder: 'Enter First Name',
                                }} />
                                <TextInput {...{
                                    label: 'Sur Name',
                                    value: passengerItem?.lastName,
                                    onChangeText: (text: string) => { updatePassengerInfo('lastName', text); },
                                    placeholder: 'Enter Sur Name',
                                }} />
                                <TextInput {...{
                                    label: 'Passport Number',
                                    value: passengerItem?.passportNumber,
                                    onChangeText: (text: string) => { updatePassengerInfo('passportNumber', text); },
                                    placeholder: 'Enter Passport Number',
                                }} />
                            </ScrollView>
                        </Box>
                        <Box flex={1} justifyContent="flex-end" marginVertical="m">
                            <Box marginHorizontal="m">
                                <Button {...{
                                    btnText: "Submit", onPress: () => { navigate('instructions'); }
                                }} />
                            </Box>
                        </Box>
                    </KeyboardAvoidingView>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo >
    );
};

export default PassengerInfo;
