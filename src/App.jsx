import theme from "./assets/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider
      theme={theme}
      defaultMode="system"
      disableTransitionOnChange
      noSsr
    >
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
