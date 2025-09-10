import { Box, Typography } from "@mui/material";
import HomeButtonGroup from "./HomeButtonGroup";

const SectionHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Page Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ letterSpacing: ".2rem" }}
          >
            SplitEZ
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Let's split the expenses EZly 😉
          </Typography>
        </Box>

        {/* Button Group */}
        <HomeButtonGroup />
      </Box>
    </>
  );
};

export default SectionHeader;
