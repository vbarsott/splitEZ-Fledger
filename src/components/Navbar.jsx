import React, { useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Fade,
  IconButton,
  Slide,
  Toolbar,
  Tooltip,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BrandLogo from "./BrandLogo";
import DrawerList from "./DrawerList";
import { loginRequest } from "../auth/authConfig";

const drawerWidth = 240;

const Navbar = ({ window, navItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const container = window ? () => window().document.body : undefined;

  const { instance } = useMsal();

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = async () => {
    try {
      const account = instance.getActiveAccount();
      if (account) {
        await instance.logoutRedirect({ account });
      } else {
        await instance.logoutRedirect();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="large"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  color="inherit"
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <BrandLogo />
                </Box>
              </Box>

              <Box>
                <Tooltip title="Search">
                  <IconButton size="large" color="inherit">
                    <SearchIcon />
                  </IconButton>
                </Tooltip>

                <AuthenticatedTemplate>
                  <Tooltip title="Logout">
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="logout"
                      onClick={handleLogoutRedirect}
                    >
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                </AuthenticatedTemplate>

                <UnauthenticatedTemplate>
                  <Tooltip title="Login">
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="login"
                      onClick={handleLoginRedirect}
                    >
                      <LoginIcon />
                    </IconButton>
                  </Tooltip>
                </UnauthenticatedTemplate>
              </Box>
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
              bgcolor: "rgba(0, 0, 0, 0.7)",
              color: "primary.light",
              backdropFilter: "blur(8px)",
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
    </>
  );
};

export default Navbar;
