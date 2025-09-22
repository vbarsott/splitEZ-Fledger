import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import SectionHeader from "../components/SectionHeader";

const MainSectionLayout = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <SectionHeader />

          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default MainSectionLayout;
