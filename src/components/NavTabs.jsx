import { NavLink } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

const NavTabs = ({ currentTab, navItems }) => (
  <Tabs value={currentTab}>
    {navItems.map((item) => (
      <Tab
        key={item.path}
        label={item.label}
        value={item.path}
        to={item.path}
        component={NavLink}
        sx={(params) => ({
          color: "primary.main",
          fontWeight: params.isActive ? "bold" : "normal",
          transition: "all 0.3s ease",
        })}
      />
    ))}
  </Tabs>
);

export default NavTabs;
