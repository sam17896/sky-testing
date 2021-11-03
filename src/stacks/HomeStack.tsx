import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@features/Home/screens";
import Order from "@features/Order/screens";
import TakeTest from "@features/TakeTest/screens";
import PassengerInfo from "@features/TakeTest/screens/passengerInfo";
import UploadDocument from "@features/TakeTest/screens/uploadDocuments";
import UploadPassport from "@features/TakeTest/screens/uploadPassport";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="order" component={Order} />
      <Stack.Screen name="take-test" component={TakeTest} />
      <Stack.Screen name="passenger-info" component={PassengerInfo} />
      <Stack.Screen name="upload-document" component={UploadDocument} />
      <Stack.Screen name="upload-passport" component={UploadPassport} />
    </Stack.Navigator>
  );
};

export default HomeStack;
