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

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form behavior
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
        <Container maxWidth="sm">
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
            >
              Login or Register
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              sx={{
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

      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Paper
            component="form"
            onSubmit={handleLogin}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 500,
              width: "100%",
              my: 4,
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
              }}
            >
              Log Into Your Account
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                type="text"
                label="Username"
                name="username"
                autoComplete="username"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                type="password"
                label="Password"
                name="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth
                required
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  value="remember-me"
                  control={
                    <Checkbox id="remember-me" aria-label="Remember Me" />
                  }
                  label="Remember Me"
                />
                <Link href="/splitEZ-Fledger/account" underline="hover">
                  Forgot Password?
                </Link>
              </Box>

              <Button type="submit" variant="contained" fullWidth>
                Log In
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
