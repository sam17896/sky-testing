import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "@features/Auth/screens/SignIn";

const AuthStack = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="signin" headerMode="none">
      <AuthStack.Screen name="signin" component={Signin} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
