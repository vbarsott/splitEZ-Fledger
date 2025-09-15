import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NavTabs from "./NavTabs";

const Footer = ({ currentTab, navItems }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          sx={{
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
        variant="body1"
        color="inherit"
        sx={{
          mt: { xs: 2, sm: 0 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        © {currentYear} Fledger Solutions. All rights reserved.
      </Typography>
    </>
  );
};

export default Footer;
