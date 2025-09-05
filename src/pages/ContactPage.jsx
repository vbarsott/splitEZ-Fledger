import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactPage = () => {
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
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ py: 2, letterSpacing: ".2rem" }}
        >
          Contact SplitEZ
        </Typography>
      </Box>
    </>
  );
};

export default ContactPage;
