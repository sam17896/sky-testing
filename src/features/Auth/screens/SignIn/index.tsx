import * as React from 'react';
import LayoutWithLogo from '@components/LayoutWithLogo';
import { Box } from 'components';
import Banner from './Banner';
import Form from './Form';
import Action from './Action';

const Signin = () => {
    return (
        <LayoutWithLogo>
            <Box flex={1}>
                <Banner />
                <Form />
                <Action />
            </Box>
        </LayoutWithLogo>
    );
};

export default Signin