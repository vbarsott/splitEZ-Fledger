import { NavLink } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavTabs = ({ currentTab, navItems }) => {
  const theme = useTheme();

  return (
    <>
      <Tabs
        value={currentTab}
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {navItems.map((item) => (
          <Tab
            key={item.path}
            label={item.label}
            value={item.path}
            to={item.path}
            component={NavLink}
            style={({ isActive }) => ({
              letterSpacing: ".1rem",
              color: isActive
                ? theme.palette.primary.light
                : theme.palette.primary.contrastText,
              textDecoration: "none",
            })}
          />
        ))}
      </Tabs>
    </>
  );
};

export default NavTabs;
