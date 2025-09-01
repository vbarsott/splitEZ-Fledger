import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "primary.light",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Fledger Solutions</Typography>

          <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href="/about" underline="hover">
              About
            </Link>
            <Link href="/contact" underline="hover">
              Contact
            </Link>
          </Box>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          © {currentYear} Fledger Solutions. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
