import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#1E1F20",
  white: "#FFF",
  gray: "#6A6A6A",
  blue: "#0682FE"
};

export const SIZES = {
  global: {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
  },
  font: {
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
  },
  app: {
    width,
    height
  }
};

export const FONTS = {
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.font.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.font.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.font.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.font.h4, lineHeight: 22 },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.font.body1, lineHeight: 36 },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.font.body2, lineHeight: 30 },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.font.body3, lineHeight: 22 },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.font.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;