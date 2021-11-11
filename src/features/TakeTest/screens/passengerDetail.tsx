import * as React from 'react';
import { Box, Text } from "components";
import LayoutBorder from "@components/LayoutBorder";
import LayoutWithLogo from "@components/LayoutWithLogo";
import { makeStyles } from "@components/makeStyles";
import TextInput from "@components/TextInput";
import Title from "@components/Title";
import useGetPassengerInfo from "@hooks/TakeTest/useGetPassengerInfo";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import Button from '@components/Button';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import TravelInfo from './components/TravelInfo';
import Snackbar from 'react-native-snackbar';
import TravelDetail from './components/TravelDetail';
import PersonalInfo from './components/PersonalInfo';
import Address from './components/Address';
import useRequest from '@hooks/useRequest';
import useAuth from '@hooks/useAuth';
import Endpoints from '@constant/Endpoint';

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

const PassengerDetail = () => {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const { params: { passengerId } } = useRoute();
    const [passengerLoading, passengerItem] = useGetPassengerInfo({ passengerId });
    const [passengerDetail, setPassengerDetail] = useState({});
    const request = useRequest();
    const { user } = useAuth();
    const { navigate } = useNavigation();
    React.useEffect(() => {
        if (passengerItem) {
            console.log({ passengerItem });
            setPassengerDetail({ ...passengerItem })
        }
    }, [passengerItem]);
    const styles = useStyles();

    const updatePassengerDetail = (key, value) => {
        console.log({ key, value });
        setPassengerDetail(prev => {
            return {
                ...prev,
                [key]: value
            };
        });
    };
    const Submit = () => {
        if (step === 0) {
            if (passengerDetail && passengerDetail?.testPourpose && passengerDetail?.departDate && passengerDetail?.arrivalDateUK) {
                setStep(prev => prev + 1);
            } else {
                Snackbar.show({ text: 'Please fill the required fields', duration: Snackbar.LENGTH_SHORT });
            }
        } else if (step === 1) {
            if (passengerDetail && passengerDetail?.arrivalCountry) {
                setStep(prev => prev + 1);
            } else {
                Snackbar.show({ text: 'Please fill the required fields', duration: Snackbar.LENGTH_SHORT });
            }
        } else if (step === 2) {
            if (passengerDetail && passengerDetail?.passengerSex && passengerDetail?.passengerEthnicity && passengerDetail?.telephone && passengerDetail?.vaccinationStatus) {
                setStep(prev => prev + 1);
            } else {
                Snackbar.show({ text: 'Please fill the required fields', duration: Snackbar.LENGTH_SHORT });
            }
        } else if (step === 3) {
            if (passengerDetail && passengerDetail?.addressLine1 && passengerDetail?.townCity && passengerDetail?.postcode) {
                setLoading(true);
                request(Endpoints.UpdatePassengerDetail, {
                    method: "POST",
                    body: passengerDetail,
                    headers: { "Authorization": `Bearer ${user?.token}` }
                }).then(res => {
                    console.log({ res });
                    setLoading(false);
                    setPassengerDetail(prev => {
                        return {
                            ...prev,
                            ...res
                        };
                    });
                    navigate('order');
                }).catch(err => {
                    setLoading(false);
                    console.log({ err });
                });
            } else {
                Snackbar.show({ text: 'Please fill the required fields', duration: Snackbar.LENGTH_SHORT });
            }
        }
    }

    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: 'Submit Passenger Info', icon: 'passenger' }} />
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior={Platform.OS === "ios" ? "padding" : null}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 20}>
                        <Box flex={0.5}
                            marginHorizontal="m"
                            marginVertical="s"
                            justifyContent="center">
                            <Text variant="smallPrimary"
                                textAlign="justify">
                                Complete the below information:
                            </Text>
                        </Box>
                        <Box flex={4.5}>
                            <ScrollView style={{ flex: 1 }}>
                                {step === 0 && <TravelInfo {...{ passengerItem: passengerDetail, updatePassengerDetail }} />}
                                {step === 1 && <TravelDetail {...{ passengerItem: passengerDetail, updatePassengerDetail }} />}
                                {step === 2 && <PersonalInfo {...{ passengerItem: passengerDetail, updatePassengerDetail }} />}
                                {step === 3 && <Address {...{ passengerItem: passengerDetail, updatePassengerDetail }} />}
                            </ScrollView>
                        </Box>
                        <Box flex={1} justifyContent="flex-end" marginVertical="m">
                            <Box marginHorizontal="m" flexDirection="row">
                                {step > 0 && <Box flex={1} marginHorizontal="s">
                                    <Button {...{
                                        btnText: "Back",
                                        onPress: () => { setStep(prev => prev - 1); }
                                    }} />
                                </Box>}
                                <Box flex={1}>
                                    <Button {...{
                                        loading,
                                        btnText: step === 3 ? "Submit" : "Next",
                                        onPress: () => { Submit(); }
                                    }} />
                                </Box>
                            </Box>
                        </Box>
                    </KeyboardAvoidingView>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    )
}

export default PassengerDetail;