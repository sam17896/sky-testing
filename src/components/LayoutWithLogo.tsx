import * as React from 'react';
import { Box } from ".";
import Logo from "./Logo";

const LayoutWithLogo = ({ children }) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Logo />
            {children}
        </Box>
    );
}

export default LayoutWithLogo;