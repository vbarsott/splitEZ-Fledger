import { useColorScheme } from "@mui/material/styles";
import {
  Box,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
} from "@mui/material";

const ToggleColorMode = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "inherit",
          minHeight: "56px",
        }}
      >
        <FormControl>
          <FormLabel id="theme-label" component="legend" color="text.primary">
            <Typography
              variant="h5"
              align="center"
              sx={{
                letterSpacing: ".1rem",
                textAlign: "center",
                color: "text.primary",
              }}
            >
              Chose your theme color mode
            </Typography>
          </FormLabel>

          <RadioGroup
            aria-labelledby="theme-label"
            name="theme-toggle"
            row
            value={mode}
            onChange={(event) => setMode(event.target.value)}
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              value="system"
              control={<Radio id="radio-system" />}
              label="System"
              htmlFor="radio-system"
            />
            <FormControlLabel
              value="light"
              control={<Radio id="radio-light" />}
              label="Light"
              htmlFor="radio-light"
            />
            <FormControlLabel
              value="dark"
              control={<Radio id="radio-dark" />}
              label="Dark"
              htmlFor="radio-dark"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default ToggleColorMode;
