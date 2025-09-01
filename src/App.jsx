import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yellow, grey } from "@mui/material/colors";

import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

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
    fontFamily: "Roboto, sans-serif", // Main font
    h1: {
      fontFamily: "Ranchers, cursive", // Accent font for headers
    },
    h2: {
      fontFamily: "Ranchers, cursive",
    },
    button: {
      fontFamily: "Ranchers, cursive", // Optional: accent font for buttons
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
