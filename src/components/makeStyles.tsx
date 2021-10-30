import { Theme } from "@constant/Base";
import { useTheme } from "@shopify/restyle";
export const useAppTheme = () => useTheme<Theme>();

export const makeStyles = (styles: (theme: Theme) => any) => () => {
  const theme = useAppTheme();
  return styles(theme);
};
