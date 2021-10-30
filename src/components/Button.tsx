import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { makeStyles, Text } from ".";
import { Theme } from "@constant/Base";
import Loader from "./Loader";

interface ButtonProps {
    btnText: string;
    size?: string | number;
    rejected?: boolean;
    loading?: boolean;
    type?: "primary" | "secondary";
    onPress: () => void;
}
const height = 50;

const useStyles = makeStyles((theme: Theme) =>
    StyleSheet.create({
        button: {
            height,
            elevation: 3,
            borderRadius: 10,
            shadowOpacity: 0.3,
            alignItems: "center",
            justifyContent: "center",
            shadowRadius: theme.spacing.xxs,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 4, height: 4 },
        },
        primary: {
            backgroundColor: theme.colors.buttonBlue,
        },
        secondary: {
            backgroundColor: theme.colors.white,
        },
    }),
);

const Button: React.FC<ButtonProps> = ({
    btnText,
    size = "100%",
    type = "primary",
    onPress,
    loading = false,
    ...props
}) => {
    const styles = useStyles();
    let textVariant = "smallWhiteMedium";
    if (btnText?.length > 8) {
        textVariant = "xsmallWhiteMedium";
    }

    return (
        <TouchableOpacity
            style={[styles.button, styles[type], { width: size }]}
            onPress={() => !loading && onPress()}
            {...props}>
            {loading ? (
                <Loader />
            ) : (
                <Text
                    variant={textVariant}
                    color={type === "secondary" ? "redTextColor" : "textWhite"}>
                    {btnText}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
