import { Box, Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Container maxWidth="xl">
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
          <Typography variant="h3" component="h1" sx={{ py: 2 }}>
            About SplitEZ
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
