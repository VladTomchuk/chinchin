import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

export const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: mode("#fff9f6", "#000000")(props),
      color: mode("#000000", "#fff9f6")(props),
    },

    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
  }),
};
export const defaultColors = {
  primary: "#3459d9",
  end: "#20FC8F",
  warningBg: "#f4ad741f",
  infoBg: "#F0F5FF",
  errorBg: "#FFF5F5",
  successBg: "#F0FFF4",
  warningText: "#ED8936",
  infoText: "#3649ed",
  errorText: "#9B2C2C",
  successText: "#276749",
  radius: "0.375rem",
  darkText: "#000000",
};

export const themeDark = {
  bg: "#000000",
  text: "#fff9f6",
  textLight: "#B3B2B2",
  secondary: "#171616",
  tertiary: "#2d2d2d",
  quartenary: "#3c3f3f",
  card: "#1E1E1E",
  bgCard: "#171616",
  mask: "rgba(0, 0, 0, 1)",
  maskEnd: "rgba(0, 0, 0, 0.7)",
  buttonBg: "#1E1E1E",
  accent: "#f1d2d3",
  accentPale: "#f1d2d3",
  shadow: " -1px 22px 52px -10px rgba(241,210,211,0.48);",
  border: "rgba(207, 219, 213, 0.15)",
  borderDark: "rgba(207, 219, 213, 0.15)",
  ...defaultColors,
};

export const themeLight = {
  bg: "#fff9f6",
  text: "#000000",
  textLight: "#7e7c7c",
  secondary: "#f4f7f7",
  tertiary: "#c7c7c7",
  quartenary: "#d3d3d3",
  card: "#FFFFFF",
  bgCard: "#FFFFFF",
  mask: "rgba(255, 255, 255, 1)",
  maskEnd: "rgba(255, 255, 255, 0)",
  buttonBg: "#FFFFFF",
  accent: "#af9c30",
  accentPale: "#af9c307a",
  shadow: "-1px 9px 36px -3px rgba(153, 155, 168, 0.25)",
  border: "rgba(207, 219, 213, 0.6)",
  borderDark: "transparent",
  ...defaultColors,
};
export const customTheme = extendTheme({
  styles,
  config,
  fonts: {
    heading: `Playfair Display, ${base.fonts?.heading}`,
    body: `Manrope, ${base.fonts?.heading}`,
  },
});
