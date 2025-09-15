import { createTheme } from "@mui/material/styles";
import { teal, blue, grey, yellow } from "@mui/material/colors";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: teal[50],
          main: teal[400],
          dark: teal[800],
          contrastText: "#fff",
        },
        secondary: {
          light: blue[100],
          main: blue[500],
          dark: blue[900],
          contrastText: "#fff",
        },
        accent: {
          light: yellow[100],
          main: yellow[800],
          dark: yellow[900],
          contrastText: "#fff",
        },
        background: {
          default: "#fff",
          paper: "#fff",
          footerBg: teal[400],
          pageBg: teal[400],
        },
        text: {
          primary: "#000",
          secondary: grey[500],
          icon: yellow[800],
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              bgcolor: teal[400],
            },
          },
        },
      },
    },

    dark: {
      palette: {
        primary: {
          light: teal[100],
          main: teal[400],
          dark: teal[900],
          contrastText: "#fff",
        },
        secondary: {
          light: blue[100],
          main: blue[500],
          dark: blue[900],
          contrastText: "#fff",
        },
        accent: {
          light: yellow[100],
          main: yellow[800],
          dark: yellow[900],
          contrastText: "#fff",
        },
        background: {
          default: "#000",
          paper: grey[900],
          footerBg: grey[900],
          pageBg: grey[900],
        },
        text: {
          primary: "#fff",
          secondary: grey[500],
          icon: teal[400],
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              bgcolor: grey[900],
            },
          },
        },
      },
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontFamily: "Ranchers, cursive", letterSpacing: ".1rem" },
    h2: { fontFamily: "Ranchers, cursive", letterSpacing: ".1rem" },
    h3: { fontFamily: "Ranchers, cursive", letterSpacing: ".1rem" },
    h4: { fontFamily: "Ranchers, cursive", letterSpacing: ".1rem" },
    h5: { fontFamily: "Ranchers, cursive", letterSpacing: ".1rem" },
    h6: { fontFamily: "Ranchers, cursive", letterSpacing: ".1rem" },
    button: {
      fontFamily: "Ranchers, cursive",
      fontSize: "20px",
      letterSpacing: ".1rem",
      textTransform: "none",
    },
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "64px",
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          "&.Mui-checked": {
            color: theme.palette.primary.dark,
          },
        }),
      },
    },
  },
});

export default theme;
