import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 4,
          flexWrap: "wrap",
          width: { xs: "90%", sm: "70%", md: "50%" },
          mx: "auto",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ letterSpacing: ".2rem" }}>
          Page not found
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", fontFamily: "Roboto" }}
        >
          Apologies, but the page you were looking for wasn't found. Try
          reaching for the search button on the nav bar above to look for
          another one.
        </Typography>
      </Box>
    </>
  );
};

export default NotFoundPage;
