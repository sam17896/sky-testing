import { createTheme } from "@shopify/restyle";
import { Fonts, FontSizes } from "./ThemeConstant";

const palette = {
  green: "#70BF57",
  black: "#0B0B0B",
  white: "#FCFCFC",
  grey1: "#F6F6F6",
  grey2: "#EBEBEB",
  grey3: "#B4B7C2",
  grey4: "#E3E3E3",
  grey5: "#909090",
  grey6: "#F5F5F5",
  grey7: "#707070",
  grey8: "#F2F2F2",
  grey9: "#C7CACD",
  lightBlue: "#F2F7FB",
  skyBlue: "#1FC2CE",
  golden: "#F99125",
  blue: '#2E1C45',
  red: "#FF0000",
};

const FontColors = {
  textPrimary: palette.blue,
  textBlack: palette.black,
  textWhite: palette.white,
};

type TypeOfFonts = typeof Fonts;
type TypeOfFontSizes = typeof FontSizes;
const variants: any = {};
Object.keys(Fonts).forEach((font) => {
  Object.keys(FontSizes).forEach((size) => {
    Object.keys(FontColors).forEach((color) => {
      variants[`${size}${color.replace("text", "")}${font}`] = {
        // @ts-ignore
        fontFamily: Fonts[font],
        color: color,
        flexShrink: 1,
        fontSize: FontSizes[size as keyof TypeOfFontSizes],
      };
    });
  });
});

Object.keys(FontSizes).forEach((size) => {
  variants[`${size}`] = {
    //  fontFamily: Fonts.Regular,
    fontSize: FontSizes[size as keyof TypeOfFontSizes],
    flexShrink: 1,
  };
  variants[`${size}Primary`] = {
    //    fontFamily: Fonts.Regular,
    color: "textPrimary",
    flexShrink: 1,
    fontSize: FontSizes[size as keyof TypeOfFontSizes],
  };
});

Object.keys(FontColors).forEach((color) => {
  variants[`${color.replace("text", "")}`] = {
    // fontFamily: Fonts.Regular,
    color: color,
    flexShrink: 1,
  };
});

const theme = createTheme({
  colors: {
    ...palette,
    ...FontColors,
    mainBackground: palette.white,
    buttonGreen: palette.green,
    buttonBlue: palette.blue,
    borderGreen: palette.green,
    backgroundGrey: palette.grey1,
    textInputBorder: palette.grey2,
    iconPrimary: palette.grey3,
    borderGrey: palette.grey4,
    textSecondary: palette.grey5,
    placeIconBg: palette.grey6,
    shadow: palette.grey7,
    appGreyBg: palette.grey8,
    iconFill: palette.grey9,
    bookmarkGolden: palette.golden,
    socialBtnLightBlue: palette.lightBlue,
    showMoreBtnColor: palette.skyBlue,
    redTextColor: palette.red,
  },
  spacing: {
    xxs: 4,
    xs: 8,
    s: 10,
    lm: 12,
    m: 16,
    gm: 18,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  textVariants: {
    ...variants,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
