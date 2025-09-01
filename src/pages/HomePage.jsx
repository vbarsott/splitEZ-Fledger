import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", m: 2 }}>
        <Typography variant="h1">SplitEZ</Typography>
        <Typography variant="h4" component="h2">
          "EZlly" split group expenses proportionally among all parties.
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
