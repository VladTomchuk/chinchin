import { themeDark, themeLight } from "@/styles/theme";
import { useColorMode } from "@chakra-ui/react";

export const useTheme = () => {
    const { colorMode } = useColorMode();
    const theme = colorMode === "dark" ? themeDark : themeLight;
  
    return { theme };
  };