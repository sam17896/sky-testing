import { Box } from '@components/';
import { useAppTheme } from '@components/makeStyles';
import TextInput from '@components/TextInput';
import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


const PersonalInfo = ({ updatePassengerDetail, passengerItem }) => {
    const [ethinicity, setEthinicity] = React.useState([
        { value: "BANGLADESHI", label: "BANGLADESHI" },
        { value: "BLACK - AFRICAN", label: "BLACK - AFRICAN" },
        { value: "BLACK - CARIBBEAN", label: "BLACK - CARIBBEAN" },
        { value: "BLACK - OTHER", label: "BLACK - OTHER" },
        { value: "CHINESE", label: "CHINESE" },
        { value: "INDIAN", label: "INDIAN" },
        { value: "PAKISTANI", label: "PAKISTANI" },
        { value: "WHITE", label: "WHITE" },
        { value: "WHITE AND ASIAN", label: "WHITE AND ASIAN" },
        { value: "WHITE AND BLACK AFRICAN", label: "WHITE AND BLACK AFRICAN" },
        { value: "WHITE AND BLACK CARIBBEAN", label: "WHITE AND BLACK CARIBBEAN" },
        { value: "WHITE BRITISH", label: "WHITE BRITISH" },
        { value: "WHITE IRISH", label: "WHITE IRISH" },
        { value: "WHITE OTHER", label: "WHITE OTHER" },
        { value: "ISC - UNSPECIFIED", label: "ISC - UNSPECIFIED" },
        { value: "ANY OTHER ETHNIC CATEGORY", label: "ANY OTHER ETHNIC CATEGORY" },
        { value: "ANY OTHER MIXED GROUP", label: "ANY OTHER MIXED GROUP" },
        { value: "OTHER / MIXED", label: "OTHER / MIXED" },
        { value: "UNKNOWN", label: "UNKNOWN" },
    ]);
    const [sex, setSex] = React.useState([
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" }
    ]);
    const [vaccinationStatus, setVaccinationStatus] = React.useState([
        { value: "Vaccinated (1st Dose)", label: "Vaccinated (1st Dose)" },
        { value: "Vaccinated (Both)", label: "Vaccinated (Both)" },
        { value: "Vaccinated (Both + Booster)", label: "Vaccinated (Both + Booster)" },
        { value: "Not Vaccinated", label: "Not Vaccinated" },
    ]);
    const [sexOpen, setSexOpen] = React.useState(false);
    const [enthinicityOpen, setEnthinicityOpen] = React.useState(false);
    const [vaccinationStatusOpen, setVaccinationStatusOpen] = React.useState(false);
    const theme = useAppTheme();
    return (
        <>
            <DropDownPicker
                open={sexOpen}
                value={passengerItem?.passengerSex}
                items={sex}
                zIndex={3000} listMode="SCROLLVIEW"
                zIndexInverse={1000}
                style={{
                    width: '91%',
                    height: 50,
                    marginVertical: theme.spacing.m,
                    backgroundColor: theme.colors.backgroundGrey,
                    alignSelf: 'center'
                }}
                placeholder="Sex *"
                setOpen={setSexOpen}
                setValue={(value) => { updatePassengerDetail('passengerSex', value()); }}
                setItems={setSex}
            />
            <DropDownPicker
                open={enthinicityOpen}
                value={passengerItem?.passengerEthnicity}
                items={ethinicity}
                zIndex={2000} listMode="SCROLLVIEW"
                zIndexInverse={2000}
                style={{
                    width: '91%',
                    height: 50,
                    marginVertical: theme.spacing.m,
                    backgroundColor: theme.colors.backgroundGrey,
                    alignSelf: 'center'
                }}
                placeholder="Ethnicity *"
                setOpen={setEnthinicityOpen}
                setValue={(value) => { updatePassengerDetail('passengerEthnicity', value()); }}
                setItems={setEthinicity}
            />
            <TextInput {...{
                label: 'NHS Number',
                labelBackground: 'backgroundGrey',
                value: passengerItem?.nhsNumber,
                onChangeText: (text: string) => { updatePassengerDetail('nhsNumber', text); },
                placeholder: 'NHS Number',
            }} />
            <TextInput {...{
                label: 'Telephone',
                value: passengerItem?.telephone,
                labelBackground: 'backgroundGrey',
                onChangeText: (text: string) => { updatePassengerDetail('telephone', text); },
                placeholder: 'Telephone *',
            }} />
            <DropDownPicker
                open={vaccinationStatusOpen}
                value={passengerItem?.vaccinationStatus}
                items={vaccinationStatus}
                zIndex={1000}
                zIndexInverse={3000} listMode="SCROLLVIEW"
                style={{
                    width: '91%',
                    height: 50,
                    marginVertical: theme.spacing.m,
                    backgroundColor: theme.colors.backgroundGrey,
                    alignSelf: 'center'
                }}
                placeholder="Vaccination Status *"
                setOpen={setVaccinationStatusOpen}
                setValue={(value) => { updatePassengerDetail('vaccinationStatus', value()); }}
                setItems={setVaccinationStatus}
            />
            <Box height={100} />
        </>

    )
}
export default PersonalInfo;