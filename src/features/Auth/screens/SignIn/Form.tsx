import * as React from 'react';
import { Box, Text, useAppTheme } from 'components';
import TextInput from '@components/TextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Form = () => {
    const theme = useAppTheme();
    return (
        <Box flex={3}>
            <Box height={50} justifyContent="center" alignItems="center" marginTop={'m'}>
                <Text variant="mediumPrimaryBold">Sign In</Text>
            </Box>
            <Box flex={3}>
                <TextInput {...{ label: 'Email Address', placeholder: 'Enter username' }} />
                <TextInput {...{ label: 'Password', placeholder: 'Enter password' }} />
                <TouchableOpacity style={{ alignItems: 'flex-end', marginHorizontal: theme.spacing.m }}>
                    <Text variant="smallPrimaryBold">Forgot password?</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    );
};

export default Form;
