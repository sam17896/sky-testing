import * as React from 'react';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Box } from 'components';
import Banner from './Banner';
import Form from './Form';
import Action from './Action';
import useSignIn from '@hooks/Auth/useSignIn';

const Signin = () => {
    const [email, setEmail, password, setPassword, Login, loading] = useSignIn();
    return (
        <LayoutWithLogo>
            <Box flex={1}>
                <Banner />
                <Form {...{ email, setEmail, password, setPassword }} />
                <Action {...{ Login, loading }} />
            </Box>
        </LayoutWithLogo>
    );
};

export default Signin