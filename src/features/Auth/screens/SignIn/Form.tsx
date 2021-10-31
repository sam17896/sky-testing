import * as React from 'react';
import { Box, Text, useAppTheme } from 'components';
import TextInput from '@components/TextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

const Form = ({ email, setEmail, password, setPassword }: {
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}) => {
    const theme = useAppTheme();
    return (
        <Box flex={3}>
            <Box height={50} justifyContent="center" alignItems="center" marginTop={'m'}>
                <Text variant="mediumPrimaryBold">Sign In</Text>
            </Box>
            <Box flex={3}>
                <TextInput {...{ label: 'Email Address', placeholder: 'Enter username', value: email, onChangeText: (e) => setEmail(e) }} />
                <TextInput {...{ label: 'Password', placeholder: 'Enter password', value: password, onChangeText: (e) => setPassword(e) }} />
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://skywaytesting.com/my-account/lost-password/')}
                    style={{ alignItems: 'flex-end', marginHorizontal: theme.spacing.m }}>
                    <Text variant="smallPrimaryBold">Forgot password?</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    );
};

export default Form;
