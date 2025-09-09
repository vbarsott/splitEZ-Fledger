import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Slide,
  Fade,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import BrandLogo from "./BrandLogo";
import DrawerList from "./DrawerList";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Navbar = ({ window, navItems }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const container = window ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
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
                  <IconButton
                    size="large"
                    color="inherit"
                  >
                    <SearchIcon />
                  </IconButton>

                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="search"
                  >
                    <AccountCircle />
                  </IconButton>
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
                backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                  <DrawerList
                    navItems={navItems}
                    onClick={handleDrawerToggle}
                  />
                </Box>
              </Fade>
            </Slide>
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default Navbar;
