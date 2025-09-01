import { createTheme } from "@mui/material/styles";
import { yellow, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: yellow[800],
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Ranchers, cursive",
    },
    h2: {
      fontFamily: "Ranchers, cursive",
    },
    h3: {
      fontFamily: "Ranchers, cursive",
    },
    h4: {
      fontFamily: "Ranchers, cursive",
    },
    h5: {
      fontFamily: "Ranchers, cursive",
    },
    h6: {
      fontFamily: "Ranchers, cursive",
    },
    button: {
      fontFamily: "Ranchers, cursive",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
