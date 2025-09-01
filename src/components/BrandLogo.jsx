import Typography from "@mui/material/Typography";

const BrandLogo = () => (
  <Typography
    variant="h6"
    component="a"
    href="/"
    sx={{
      mr: 2,
      flexGrow: 1,
      display: { xs: "none", sm: "block" },
      letterSpacing: ".2rem",
      color: "primary.main",
      textDecoration: "none",
      fontFamily: "Ranchers, cursive",
    }}
  >
    SplitEZ
  </Typography>
);

export default BrandLogo;
