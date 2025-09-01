import theme from "./assets/styles/theme";
import AppRouter from "./routes/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
