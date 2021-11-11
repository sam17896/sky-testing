import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@features/Home/screens";
import Order from "@features/Order/screens";
import TakeTest from "@features/TakeTest/screens";
import PassengerInfo from "@features/TakeTest/screens/passengerInfo";
import UploadDocument from "@features/TakeTest/screens/uploadDocuments";
import UploadPassport from "@features/TakeTest/screens/uploadPassport";
import PassengerList from "@features/TakeTest/screens/passengerList";
import PastOrderList from "@features/Results/PastOrdersList";
import Results from "@features/Results";
import UploadTestingKit from "@features/TakeTest/screens/uploadTestingKit";
import UploadVideo from "@features/TakeTest/screens/uploadVideo";
import PassengerDetail from "@features/TakeTest/screens/passengerDetail";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="order" component={Order} />
      <Stack.Screen name="past-orders" component={PastOrderList} />
      <Stack.Screen name="result" component={Results} />
      <Stack.Screen name="take-test" component={TakeTest} />
      <Stack.Screen name="passenger-info" component={PassengerInfo} />
      <Stack.Screen name="passenger-detail" component={PassengerDetail} />
      <Stack.Screen name="upload-document" component={UploadDocument} />
      <Stack.Screen name="upload-passport" component={UploadPassport} />
      <Stack.Screen name="upload-testing-kit" component={UploadTestingKit} />
      <Stack.Screen name="upload-video" component={UploadVideo} />
      <Stack.Screen name="passenger-list" component={PassengerList} />
    </Stack.Navigator>
  );
};

export default HomeStack;
