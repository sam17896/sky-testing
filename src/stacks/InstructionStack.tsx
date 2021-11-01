import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Instruction from "@features/Instructions/screens";
import Steps from "@features/Instructions/screens/Steps";


const Stack = createStackNavigator();

const InstructionStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Instruction" component={Instruction} />
            <Stack.Screen name="Steps" component={Steps} />
        </Stack.Navigator>
    );
};

export default InstructionStack;
