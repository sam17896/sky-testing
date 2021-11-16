import * as React from 'react';
import { Box } from 'components';
import { WebView } from 'react-native-webview';

const Verification = () => {
    return (
        <Box flex={1}>
            <WebView source={{ uri: 'https://skywaytesting.com/faq/' }} />
        </Box>
    );
};

export default Verification;