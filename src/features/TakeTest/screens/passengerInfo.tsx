import { Box, makeStyles, Text, useAppTheme } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import * as React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import Title from '@components/Title';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import { useNavigation, useRoute } from '@react-navigation/core';
import useRequest from '@hooks/useRequest';
import Endpoints from '@constant/Endpoint';
import useAuth from '@hooks/useAuth';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

const useStyles = makeStyles((theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.backgroundGrey,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10
        }
    });
})


const PassengerInfo = () => {
    const { navigate } = useNavigation();
    const { user } = useAuth();
    const { params: { item } } = useRoute();
    const [passengerItem, setPassengerItem] = React.useState<any>();
    const styles = useStyles();
    const request = useRequest();
    const theme = useAppTheme();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (item) {
            console.log({ item });
            setPassengerItem({ ...item });
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

    const Submit = () => {
        setLoading(true);
        request(Endpoints.UpdatePassengerInfo, {
            method: "POST",
            body: passengerItem,
            headers: { "Authorization": `Bearer ${user?.token}` }
        }).then(res => {
            setPassengerItem(prev => {
                return {
                    ...prev,
                    ...res
                };
            });
            console.log({ res });
            setLoading(false);
            navigate('passenger-detail', { passengerId: res?.id });
        }).catch(err => {
            setLoading(false);
            console.log({ err });
        });
    };

    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: 'Submit Passenger Info', icon: 'passenger' }} />
                    <KeyboardAvoidingView
                        style={styles.container}
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
                                    labelBackground: 'backgroundGrey',
                                    value: passengerItem?.firstName,
                                    onChangeText: (text: string) => { updatePassengerInfo('firstName', text); },
                                    placeholder: 'Enter First Name',
                                }} />
                                <TextInput {...{
                                    label: 'Sur Name',
                                    value: passengerItem?.lastName,
                                    labelBackground: 'backgroundGrey',
                                    onChangeText: (text: string) => { updatePassengerInfo('lastName', text); },
                                    placeholder: 'Enter Sur Name',
                                }} />
                                <TextInput {...{
                                    label: 'Passport Number',
                                    value: passengerItem?.passportNumber,
                                    labelBackground: 'backgroundGrey',
                                    onChangeText: (text: string) => { updatePassengerInfo('passportNumber', text); },
                                    placeholder: 'Enter Passport Number',
                                }} />
                                <Box>
                                    <DatePicker
                                        style={{ height: 50, borderWidth: 1, margin: theme.spacing.m, borderRadius: 5, width: '90%', borderColor: theme.colors.blue }}
                                        date={passengerItem?.dateOfBirth}
                                        mode="date"
                                        placeholder="Select Date Of Birth"
                                        format="DD-MM-YYYY"
                                        minDate="01-01-1970"
                                        maxDate={moment().format('DD-MM-YYYY')}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                right: 0,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateTouchBody: {
                                                borderWidth: 0,
                                            },
                                            dateInput: {
                                                marginLeft: 10,
                                                alignItems: 'flex-start',
                                                borderWidth: 0,
                                            }
                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => { updatePassengerInfo('dateOfBirth', date); }}
                                    />
                                    <Box position='absolute' top={5} backgroundColor="backgroundGrey" left={22} paddingHorizontal="s">
                                        <Text variant="xsmallPrimary">Date Of Birth</Text>
                                    </Box>
                                </Box>
                                <TextInput {...{
                                    label: 'Email Address',
                                    labelBackground: 'backgroundGrey',
                                    value: passengerItem?.passengerEmail,
                                    onChangeText: (text: string) => { updatePassengerInfo('passengerEmail', text); },
                                    placeholder: 'Enter Email Address',
                                }} />
                            </ScrollView>
                        </Box>
                        <Box flex={1} justifyContent="flex-end" marginVertical="m">
                            <Box marginHorizontal="m">
                                <Button {...{
                                    loading,
                                    btnText: "Submit",
                                    onPress: () => { Submit(); }
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
