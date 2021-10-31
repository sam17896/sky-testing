import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import useAuth from "@hooks/useAuth";
import Splash from "@features/Splash";
import AppStackNavigator from "./AppStack";
import AuthStackNavigator from "./AuthStack";

const DeciderStack = createStackNavigator();

const DeciderStackScreen: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { isLoggedIn } = useAuth();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <DeciderStack.Navigator headerMode="none">
      {isLoading && (
        <DeciderStack.Screen
          name="Splash"
          component={Splash}
          options={{
            animationEnabled: false,
          }}
        />
      )}
      {!isLoading && isLoggedIn && (
        <DeciderStack.Screen
          name="Home"
          component={AppStackNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      )}

      {!isLoading && !isLoggedIn && (
        <DeciderStack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </DeciderStack.Navigator>
  );
};

export default DeciderStackScreen;
