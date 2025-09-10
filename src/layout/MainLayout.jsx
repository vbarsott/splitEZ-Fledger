import { Outlet } from "react-router";
import { useLocation, matchPath } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🔍 Match current route
function useRouteMatch(patterns) {
  const { pathname } = useLocation();
  return patterns.find((pattern) => matchPath(pattern, pathname));
}

const navItems = [
  { label: "About", path: "/about" },
  { label: "Settings", path: "/settings" },
];

const MainLayout = () => {
  const routeMatch = useRouteMatch(navItems.map((item) => item.path));
  const currentTab = routeMatch || false;
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        <Navbar navItems={navItems} />

        <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
          <Container maxWidth="xl">
            <Outlet />
          </Container>
        </Box>

        <Box
          component="footer"
          sx={{
            backgroundColor: theme.palette.background.footerBg,
            color: "primary.contrastText",
            pt: 1,
            pb: 3,
          }}
        >
          <Container maxWidth="xl">
            <Footer navItems={navItems} currentTab={currentTab} />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
