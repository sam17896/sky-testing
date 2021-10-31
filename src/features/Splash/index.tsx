import Loader from "@components/Loader";
import React from "react";
import { SafeAreaView } from "react-native";

const Splash: React.FC = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Loader />
        </SafeAreaView>
    );
};

export default Splash;
