import { Platform } from "react-native";
import { moderateScale } from "utils";

export const Fonts = {
  Regular: Platform.OS === "ios" ? "Roboto-Regular" : "Roboto-Regular",
  Bold: Platform.OS === "ios" ? "Roboto-Bold" : "Roboto-Bold",
  Medium: Platform.OS === "ios" ? "Roboto-Medium" : "Roboto-Medium",
  Light: Platform.OS === "ios" ? "Roboto-Light" : "Roboto-Light",
  Thin: Platform.OS === "ios" ? "Roboto-Thin" : "Roboto-Thin",
};

export const FontSizes = {
  tiny: moderateScale(8),
  xxsmall: moderateScale(10),
  xsmall: moderateScale(12),
  small: moderateScale(14),
  medium: moderateScale(16),
  xmedium: moderateScale(18),
  large: moderateScale(20),
  xlarge: moderateScale(22),
  xxlarge: moderateScale(24),
  larger: moderateScale(26),
  xlarger: moderateScale(28),
  xxlarger: moderateScale(30),
  xxxlargest: moderateScale(32),
};
