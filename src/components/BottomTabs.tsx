import * as React from "react";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Icon, Text, Box } from "../components";

const Icons = [
  require("@assets/home.png"),
  require("@assets/verification.png"),
  require("@assets/instructions.png"),
  require("@assets/profile.png")
];

const BOTTOM_TABS_REMOVE_SCREENS = ['upload-passport'];

const BottomTabs: React.FC<any> = ({ state, descriptors, navigation }) => {
  const theme = useTheme();
  const { iconPrimary, black } = theme.colors;
  const focusedOptions = descriptors[state?.routes[state?.index]?.key]?.options;
  // Removing notifcaition from bottom routes
  const bottomTabRoutes = state?.routes;
  console.log({ bottomTabRoutes });
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
        flexDirection: "row",
        elevation: theme.spacing.xxs,
        shadowOpacity: 0.5,
        backgroundColor: theme.colors.blue,
        shadowRadius: theme.spacing.xxs,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 2, height: 2 },
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
              <Image
                source={Icons[index]}
                style={{ width: 24, height: 24 }}

              // name={Icons[index]}
              // size={isFocused ? 20 : 24}
              // color={isFocused ? black : iconPrimary}
              />
            </Box>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default BottomTabs;
