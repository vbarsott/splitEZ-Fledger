import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const BrandLogo = () => (
  <Typography
    variant="h6"
    component={Link}
    to="/"
    color="inherit"
    sx={{
      textDecoration: "none",
      fontSize: 24,
      fontFamily: "Ranchers, cursive",
    }}
  >
    SplitEZ
  </Typography>
);

export default BrandLogo;
