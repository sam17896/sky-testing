import * as React from 'react';
import { Box, Text, useAppTheme } from 'components';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import TextInput from '@components/TextInput';

const TravelInfo = ({ passengerItem, updatePassengerDetail }) => {
    const [testPurposeOpen, setTestPurposeOpen] = React.useState(false);
    const [testPurposeItems, setTestPurposeItems] = React.useState([
        { value: 'Flight', label: 'Flight' },
        { value: 'Ferry', label: 'Ferry' },
        { value: 'Coach', label: 'Coach' },
        { value: 'Train', label: 'Train' },
        { value: 'Other', label: 'Other' },
    ]);

    const theme = useAppTheme();

    return (
        <>
            <DropDownPicker
                open={testPurposeOpen}
                value={passengerItem?.testPourpose}
                items={testPurposeItems}
                style={{
                    width: '91%',
                    height: 50,
                    marginVertical: theme.spacing.m,
                    backgroundColor: theme.colors.backgroundGrey,
                    alignSelf: 'center'
                }}
                placeholder="Travelling By *"
                setOpen={setTestPurposeOpen}
                setValue={(value) => {
                    updatePassengerDetail('testPourpose', value());
                }}
                setItems={setTestPurposeItems}
            />
            <Box>
                <DatePicker
                    style={{ height: 50, borderWidth: 1, margin: theme.spacing.m, borderRadius: 5, width: '90%', borderColor: theme.colors.blue }}
                    date={passengerItem?.departDate}
                    mode="date"
                    placeholder="Departure Date *"
                    format="DD-MM-YYYY"
                    minDate="01-01-1970"
                    maxDate={moment().add(1, 'year').format('DD-MM-YYYY')}
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
                    onDateChange={(date) => { updatePassengerDetail('departDate', date); }}
                />
                <Box position='absolute' top={5} backgroundColor="backgroundGrey" left={22} paddingHorizontal="s">
                    <Text variant="xsmallPrimary">Departure Date</Text>
                </Box>
            </Box>
            <Box>
                <DatePicker
                    style={{ height: 50, borderWidth: 1, margin: theme.spacing.m, borderRadius: 5, width: '90%', borderColor: theme.colors.blue }}
                    date={passengerItem?.arrivalDateUK}
                    mode="date"
                    placeholder="Arrival Date *"
                    format="DD-MM-YYYY"
                    minDate="01-01-1970"
                    maxDate={moment().add(1, 'year').format('DD-MM-YYYY')}
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
                    onDateChange={(date) => { updatePassengerDetail('arrivalDateUK', date); }}
                />
                <Box position='absolute' top={5} backgroundColor="backgroundGrey" left={22} paddingHorizontal="s">
                    <Text variant="xsmallPrimary">Arrival Date</Text>
                </Box>
            </Box>
            <TextInput {...{
                label: 'Flight Number',
                labelBackground: 'backgroundGrey',
                value: passengerItem?.transportReference,
                onChangeText: (text: string) => { updatePassengerDetail('transportReference', text); },
                placeholder: 'Enter Flight Number or Similar',
            }} />
        </>
    );
};

export default TravelInfo;