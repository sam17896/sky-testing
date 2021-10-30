import * as React from 'react';
import { Image } from "react-native";
import { Box } from '.';

const Logo = () => {
    return (
        <Box paddingHorizontal={'m'} paddingVertical="s">
            <Image source={require('../assets/logo.png')} />
        </Box>
    )
}

export default Logo;