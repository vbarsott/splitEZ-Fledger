import { Outlet } from "react-router";
import { Box } from "@mui/material";
import SectionHeader from "../components/SectionHeader";

const MainSectionLayout = () => {
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
        <SectionHeader />

        <Outlet />
      </Box>
    </>
  );
};

export default MainSectionLayout;
