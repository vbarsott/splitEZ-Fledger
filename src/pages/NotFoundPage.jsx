import { Link } from "react-router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", m: 2 }}>
        <Typography variant="h1">NotFoundPage</Typography>
        <Link to={"/"}>Go to Home</Link>
      </Box>
    </>
  );
};

export default NotFoundPage;
