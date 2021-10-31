import * as React from 'react';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Box } from 'components';
import Banner from './Banner';
import Form from './Form';
import Action from './Action';
import useSignIn from '@hooks/Auth/useSignIn';
import { ScrollView } from 'react-native';

const Signin = () => {
    const [email, setEmail, password, setPassword, Login, loading] = useSignIn();
    return (
        <LayoutWithLogo>
            <ScrollView style={{ flex: 1 }} >
                <Box flex={1}>
                    <Banner />
                    <Form {...{ email, setEmail, password, setPassword }} />
                    <Action {...{ Login, loading }} />
                </Box>
            </ScrollView>
        </LayoutWithLogo>
    );
};

export default Signin