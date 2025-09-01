import { NavLink } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import BrandLogo from "./BrandLogo";

const DrawerList = ({ navItems, onClick }) => (
  <Box onClick={onClick} sx={{ textAlign: "center" }}>
    <BrandLogo />
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem disablePadding key={item.path}>
          <ListItemButton
            component={NavLink}
            to={item.path}
            sx={{
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "&.active": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                fontWeight: "bold",
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default DrawerList;
