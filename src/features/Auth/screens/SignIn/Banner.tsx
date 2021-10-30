import * as React from 'react';
import { Box } from 'components';
import { Image } from 'react-native';

const Banner = () => {
    return (
        <Box flex={1} alignItems="center" justifyContent="center" margin="l">
            <Image source={require('@assets/sign-in-banner.png')} />
        </Box>
    );
};

export default Banner;