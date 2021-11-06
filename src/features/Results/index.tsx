import { Box, Text, useAppTheme } from 'components';
import LayoutBorder from '@components/LayoutBorder';
import LayoutWithLogo from '@components/LayoutWithLogo';
import Title from '@components/Title';
import * as React from 'react';


const Results = () => {
    const theme = useAppTheme();
    return (
        <LayoutWithLogo>
            <LayoutBorder>
                <Box flex={1} borderRadius={10} margin="m">
                    <Title {...{ title: 'Results' }} />
                    <Box
                        flex={1}
                        backgroundColor={'backgroundGrey'}
                        borderBottomRightRadius={10}
                        borderBottomLeftRadius={10}
                        marginHorizontal="m"
                    >
                        <Text variant="mediumPrimary">Results</Text>
                    </Box>
                </Box>
            </LayoutBorder>
        </LayoutWithLogo>
    );
};

export default Results;
