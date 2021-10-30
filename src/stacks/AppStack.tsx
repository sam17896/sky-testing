import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabs } from "components";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const ApplicationStackNavigator: React.FC = () => {
    return (

        <Tab.Navigator
            tabBar={(props) => <BottomTabs {...props} />}>
            <Tab.Screen name="home" component={HomeStack} />
        </Tab.Navigator>

    );
};

export default ApplicationStackNavigator;
