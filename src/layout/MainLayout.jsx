import { Outlet } from "react-router";
import { useLocation, matchPath } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";

// 🔍 Match current route
function useRouteMatch(patterns) {
  const { pathname } = useLocation();
  return patterns.find((pattern) => matchPath(pattern, pathname));
}

const navItems = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Settings", path: "/settings" },
];

const MainLayout = () => {
  const routeMatch = useRouteMatch(navItems.map((item) => item.path));
  const currentTab = routeMatch || false;

  return (
    <>
      <Navbar navItems={navItems} />

      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>

      <Footer navItems={navItems} currentTab={currentTab} />
    </>
  );
};

export default MainLayout;
