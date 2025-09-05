import Typography from "@mui/material/Typography";

const BrandLogo = () => (
  <Typography
    variant="h6"
    component="a"
    href="/"
    color="inherit"
    sx={{
      letterSpacing: ".1rem",
      textDecoration: "none",
      fontFamily: "Ranchers, cursive",
    }}
  >
    SplitEZ
  </Typography>
);

export default BrandLogo;
