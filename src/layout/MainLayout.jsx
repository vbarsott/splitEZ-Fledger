import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
