import { Link } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavTabs from "./NavTabs";

const Footer = ({ currentTab, navItems }) => {
  const theme = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.background.footerBg,
          color: "primary.contrastText",
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              component={Link}
              href="/"
              color="inherit"
              sx={{
                letterSpacing: ".1rem",
                textDecoration: "none",
                fontFamily: "Ranchers, cursive",
              }}
            >
              Fledger Solutions
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
              <NavTabs currentTab={currentTab} navItems={navItems} />
            </Box>
          </Box>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
            color="inherit"
          >
            © {currentYear} Fledger Solutions. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
