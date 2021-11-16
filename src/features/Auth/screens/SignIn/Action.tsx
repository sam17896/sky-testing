import Button from '@components/Button';
import { Box, Text } from 'components';
import * as React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

const Action = ({ Login, loading }: {
    Login: () => Promise<void>,
    loading: boolean,
}) => {
    return (
        <Box flex={1} marginHorizontal="m" marginVertical="m">
            <Box marginVertical="xxs">
                <Button {...{ btnText: "SIGN IN", loading, onPress: () => Login() }} />
            </Box>
            <Box marginVertical="xxs">
                <Button {...{ btnText: "PURCHASE TESTING KIT", onPress: () => { Linking.openURL('https://skywaytesting.com/'); } }} />
            </Box>
            <Box flex={1} flexDirection="row" justifyContent="space-between" margin="s">
                <TouchableOpacity>
                    <Text variant="smallPrimaryBold">Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text variant="smallPrimaryBold">Terms & Conditions</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    );
};


export default Action;
