import * as React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Icon, Text, Box } from "../components";

const Icons = ["home", "search", "new-request", "chat", "menu"];
const Texts = ["Home", "Search", "New Request", "Message", "Menu"];

const BOTTOM_TABS_REMOVE_SCREENS = [
  "travel-request",
  "order-request",
  "request-for-order",
  "my-travel-plans",
  "my-order-requests",
  "pending-reviews",
  "my-approved-requests",
  "settings",
  "about",
  "suggestion",
];

const BottomTabs: React.FC<any> = ({ state, descriptors, navigation }) => {
  const theme = useTheme();
  const { iconPrimary, black } = theme.colors;
  const focusedOptions = descriptors[state?.routes[state?.index]?.key]?.options;
  // Removing notifcaition from bottom routes
  const bottomTabRoutes = state?.routes.slice(0, -1);

  const rootScreen = state?.routes[state?.index]?.state;
  if (
    focusedOptions?.tabBarVisible === false ||
    BOTTOM_TABS_REMOVE_SCREENS.includes(
      rootScreen?.routes[rootScreen?.index]?.name,
    )
  ) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        overflow: "hidden",
        shadowOpacity: 0.5,
        position: "absolute",
        flexDirection: "row",
        elevation: theme.spacing.xxs,
        bottom: theme.spacing.xs * -1,
        backgroundColor: "transparent",
        shadowRadius: theme.spacing.xxs,
        shadowColor: theme.colors.shadow,
        borderTopLeftRadius: theme.spacing.l,
        shadowOffset: { width: 2, height: 2 },
        borderTopRightRadius: theme.spacing.l,
      }}>
      {bottomTabRoutes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            key={index.toString()}
            accessibilityRole="button"
            testID={options.tabBarTestID}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? { selected: true } : {}}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Box
              margin="s"
              padding="s"
              width={"120%"}
              borderRadius={12}
              alignItems="center">
              <Icon
                name={Icons[index]}
                size={isFocused ? 20 : 24}
                color={isFocused ? black : iconPrimary}
              />
              {isFocused ? (
                <Text
                  numberOfLines={1}
                  textAlign="center"
                  variant={"xxsmallPrimary"}
                  style={{ marginTop: theme.spacing.xxs }}>
                  {Texts[index]}
                </Text>
              ) : null}
            </Box>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default BottomTabs;
