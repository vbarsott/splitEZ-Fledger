import theme from "./assets/styles/theme";
import AppRouter from "./routes/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

function App() {
  return (
    <>
      <ThemeProvider
        theme={theme}
        defaultMode="system"
        disableTransitionOnChange
        noSsr
      >
        <Toolbar />
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
