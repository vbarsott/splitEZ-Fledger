import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          height: "50vh",
          width: { xs: "90%", sm: "70%", md: "50%" },
          mx: "auto",
        }}
      >
        <Typography variant="h1" sx={{ letterSpacing: ".2rem" }}>
          SplitEZ
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", fontFamily: "Roboto" }}
        >
          "EZlly" split group expenses proportionally among all parties.
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
