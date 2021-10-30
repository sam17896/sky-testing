import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DeciderStackScreen from '@stacks/DeciderStack';
import theme from '@constant/Base';
import AuthProvider from '@providers/Auth';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <DeciderStackScreen />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
