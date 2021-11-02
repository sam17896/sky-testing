import Button from '@components/Button';
import useAuth from '@hooks/useAuth';
import { Text, Box } from 'components';
import * as React from 'react';

const Verification = () => {
    const { setUserLoggedOut } = useAuth();
    return (
        <Box margin="m">
            <Button {...{ btnText: "LOGOUT", onPress: () => { setUserLoggedOut(); } }} />
            <Text>Hello</Text>
        </Box>
    )

}

export default Verification;