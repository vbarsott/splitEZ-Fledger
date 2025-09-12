import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.background.pageBg,
          color: "primary.contrastText",
          pt: 3,
          pb: 5,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{ letterSpacing: ".2rem" }}
            >
              Login or Register
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                letterSpacing: ".2rem",
                fontStyle: "italic",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              Come On In
              <LoginIcon
                sx={{ fontSize: 40, color: theme.palette.text.icon }}
              />
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Paper
            component="form"
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 500,
              width: "100%",
              m: 4,
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                letterSpacing: ".1rem",
                textAlign: "center",
              }}
            >
              Log Into Your Account
            </Typography>

            <TextField label="Username" variant="outlined" fullWidth required />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                value="remember-me"
                control={<Checkbox id="remember-me" />}
                label="Remember Me"
              />
              <Link href="#" underline="hover">
                Forgot Password?
              </Link>
            </Box>

            <Button onClick={handleLogin} variant="contained" fullWidth>
              Log In
            </Button>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
