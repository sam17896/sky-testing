import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@features/Home/screens";
import Order from "@features/Order/screens";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="order" component={Order} />
    </Stack.Navigator>
  );
};

export default HomeStack;
