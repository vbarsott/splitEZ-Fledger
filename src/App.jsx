import { Suspense } from "react";
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
      <Suspense fallback={<div>Loading page...</div>}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
