import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const buttonItems = [
  {
    name: "Groups",
    path: "/groups",
  },
  {
    name: "Expenses",
    path: "/expenses",
  },
  {
    name: "Result",
    path: "/result",
  },
];

const HomeButtonGroup = () => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="Homepage button group navigation"
        color="accent"
        size="large"
      >
        {buttonItems.map((item) => (
          <Button sx={{ fontSize: 20 }} component={NavLink} to={item.path}>
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default HomeButtonGroup;
