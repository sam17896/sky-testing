import TextInput from '@components/TextInput';
import * as React from 'react';


const Address = ({ updatePassengerDetail, passengerItem }) => {
    return (
        <>
            <TextInput {...{
                label: 'Address Line 1',
                value: passengerItem?.addressLine1,
                labelBackground: 'backgroundGrey',
                onChangeText: (text: string) => { updatePassengerDetail('addressLine1', text); },
                placeholder: 'Address Line 1',
            }} />
            <TextInput {...{
                label: 'Address Line 2',
                value: passengerItem?.addressLine2,
                labelBackground: 'backgroundGrey',
                onChangeText: (text: string) => { updatePassengerDetail('addressLine2', text); },
                placeholder: 'Address Line 2',
            }} />
            <TextInput {...{
                label: 'Address Line 3',
                value: passengerItem?.addressLine3,
                labelBackground: 'backgroundGrey',
                onChangeText: (text: string) => { updatePassengerDetail('addressLine3', text); },
                placeholder: 'Address Line 3',
            }} />
            <TextInput {...{
                label: 'Town City',
                value: passengerItem?.townCity,
                labelBackground: 'backgroundGrey',
                onChangeText: (text: string) => { updatePassengerDetail('townCity', text); },
                placeholder: 'Telephone',
            }} />
            <TextInput {...{
                label: 'Post Code',
                value: passengerItem?.postcode,
                labelBackground: 'backgroundGrey',
                onChangeText: (text: string) => { updatePassengerDetail('postcode', text); },
                placeholder: 'Telephone',
            }} />
        </>
    )
}

export default Address;