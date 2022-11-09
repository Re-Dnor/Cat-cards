import { createTheme } from "@mui/material";

export default function useTheme() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#EF3124"
      }
    }
  });
  return { theme };
}
