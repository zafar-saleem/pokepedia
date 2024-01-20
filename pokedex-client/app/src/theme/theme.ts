import { 
  palette,
  colors,
  sizes,
  gutter,
} from "./tokens";
import { typography } from "./typography";
import { breakpoints } from "./screens";

export const theme = {
  palette: {...palette},
  borderRadius: "4px",
  tokens: {
    colors: { ...colors },
    sizes: { ...sizes },
    gutter: { ...gutter },
  },
  typography: { ...typography },
  breakpoints: { ...breakpoints },
  borderColor: "#cccccc",
};
