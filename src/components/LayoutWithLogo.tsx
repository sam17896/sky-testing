import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from ".";
import Logo from "./Logo";

const LayoutWithLogo = ({ children }) => {
    const theme = useAppTheme();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
            <Logo />
            {children}
        </SafeAreaView>
    );
}

export default LayoutWithLogo;