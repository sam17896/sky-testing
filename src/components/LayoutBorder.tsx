import * as React from 'react';
import { Box } from '.';


const LayoutBorder = ({ children }) => {
    return (
        <Box flex={1} backgroundColor="blue">
            <Box
                flex={1}
                backgroundColor="white"
                borderBottomLeftRadius={50}
                borderBottomRightRadius={50}
                borderBottomEndRadius={50}
                borderBottomStartRadius={50}
            >
                {children}
            </Box>
        </Box>
    )
}

export default LayoutBorder;