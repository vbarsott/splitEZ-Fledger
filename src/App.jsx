import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const theme = createTheme({
  typography: {
    fontFamily: "Ranchers, cursive",
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center", m: 2 }}>
          <Typography variant="h1">SplitEZ</Typography>
          <Typography variant="h4" component="h2">
            "EZlly" split group expenses proportionally among all parties.
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
