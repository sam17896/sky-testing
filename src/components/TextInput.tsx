import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Box, Text, useAppTheme } from '.';


const TextInput = ({ label, ...props }) => {
    const theme = useAppTheme();
    return (
        <Box height={50} borderColor="blue" borderRadius={5} borderWidth={1} margin="m">
            <Box position='absolute' top={-10} backgroundColor="white" left={5} paddingHorizontal="s">
                <Text variant="xsmallPrimary">{label}</Text>
            </Box>
            <RNTextInput placeholderTextColor={theme.colors.textPrimary} {...props} />
        </Box>
    );
};

export default TextInput;