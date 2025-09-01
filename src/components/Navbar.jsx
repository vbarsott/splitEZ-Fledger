import * as React from "react";
import { useLocation, matchPath } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Slide,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrandLogo from "./BrandLogo";
import DrawerList from "./DrawerList";
import NavTabs from "./NavTabs";

const drawerWidth = 240;

const navItems = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// 🔍 Match current route
function useRouteMatch(patterns) {
  const { pathname } = useLocation();
  return patterns.find((pattern) => matchPath(pattern, pathname));
}

const Navbar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const container = window ? () => window().document.body : undefined;
  const routeMatch = useRouteMatch(navItems.map((item) => item.path));
  const currentTab = routeMatch || false;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <BrandLogo />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavTabs currentTab={currentTab} navItems={navItems} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Slide direction="right" in={mobileOpen} mountOnEnter unmountOnExit>
            <Fade in={mobileOpen} timeout={300}>
              <Box>
                <DrawerList navItems={navItems} onClick={handleDrawerToggle} />
              </Box>
            </Fade>
          </Slide>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
