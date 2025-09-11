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
    <Box sx={{ mt: 4, mb: 2 }}>
      <BrandLogo />
    </Box>

    <Divider />

    <List>
      {navItems.map((item) => (
        <ListItem
          disablePadding
          key={item.path}
          sx={{ color: "primary.light" }}
        >
          <ListItemButton
            component={NavLink}
            to={item.path}
            sx={{
              transition: "background-color 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
                color: "primary.contrastText",
              },
              "&.active": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
                fontWeight: "bold",
                color: "primary.contrastText",
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
