import { useColorScheme, useTheme } from "@mui/material/styles";
import {
  Box,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const ToggleColorMode = () => {
  const theme = useTheme();

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
          bgcolor: "background.default",
          py: 2,
          minHeight: "56px",
        }}
      >
        <FormControl>
          <FormLabel
            id="theme-label"
            color="text.primary"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Select a Theme
          </FormLabel>

          <RadioGroup
            aria-labelledby="theme-label"
            name="theme-toggle"
            row
            value={mode}
            onChange={(event) => setMode(event.target.value)}
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
