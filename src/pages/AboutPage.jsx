import { Box, Typography } from "@mui/material";

const AboutPage = () => {
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
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ py: 2, letterSpacing: ".2rem" }}
        >
          About SplitEZ
        </Typography>
      </Box>
    </>
  );
};

export default AboutPage;
