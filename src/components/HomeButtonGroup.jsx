import { NavLink } from "react-router-dom";
import { mainSectionRoutes } from "../routes/routesConfig.jsx";
import { Button, ButtonGroup } from "@mui/material";

const HomeButtonGroup = () => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="Homepage button group navigation"
        color="accent"
        size="large"
      >
        {mainSectionRoutes.map(({ name, path }) => (
          <Button
            key={path}
            sx={{ fontSize: 20 }}
            component={NavLink}
            to={path}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default HomeButtonGroup;
