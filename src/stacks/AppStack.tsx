import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabs } from "components";
import HomeStack from "./HomeStack";
import Verification from "@features/Verification/screens";
import Instruction from "@features/Instructions/screens";
import Profile from "@features/Profile/screens";
const Tab = createBottomTabNavigator();

const ApplicationStackNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <BottomTabs {...props} />}>
            <Tab.Screen name="home" component={HomeStack} />
            <Tab.Screen name="verification" component={Verification} />
            <Tab.Screen name="instructions" component={Instruction} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>

    );
};

export default ApplicationStackNavigator;
