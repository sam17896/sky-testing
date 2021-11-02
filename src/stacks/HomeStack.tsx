import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@features/Home/screens";
import Order from "@features/Order/screens";
import TakeTest from "@features/TakeTest/screens";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="order" component={Order} />
      <Stack.Screen name="take-test" component={TakeTest} />
    </Stack.Navigator>
  );
};

export default HomeStack;
