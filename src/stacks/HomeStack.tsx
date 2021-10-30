import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@features/Home/screens";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
