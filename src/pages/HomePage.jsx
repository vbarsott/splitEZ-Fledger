import { Box, Typography, Paper } from "@mui/material";

const descriptionItems = [
  {
    title: "Step 1: Create a group",
    description:
      "Select the button group, create a group, and inform the participant's names",
  },
  {
    title: "Step 2: Add the expenses",
    description:
      "Select the button expenses and include the expenses according to the participant's names",
  },
  {
    title: "Step 3: Check the result",
    description:
      "Select the button result and check how much each participant should pay to whom",
  },
];

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {descriptionItems.map((item) => (
          <Paper
            key={item.title}
            elevation={3}
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "100%",
                md: "calc(33.33% - 16px)",
              },
              minWidth: "250px",
              flexGrow: 1,
              flexShrink: 0,
              bgcolor: "default",
              p: 2,
            }}
          >
            <Typography
              variant="body1"
              component="h3"
              color="accent"
              sx={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              {item.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default HomePage;
