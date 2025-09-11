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
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{ py: 2, letterSpacing: ".2rem" }}
            >
              Login
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                letterSpacing: ".2rem",
                textAlign: "center",
                fontWeight: "bold",
                fontStyle: "italic",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              Come On In
              <LoginIcon sx={{ fontSize: 40, color: "accent.main" }} />
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
              maxWidth: 400,
              mx: "auto",
              mt: 8,
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                letterSpacing: ".1rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Log Into Your Account
            </Typography>

            <TextField
              label="Username"
              variant="outlined"
              color="accent"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              color="accent"
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
                control={<Checkbox id="remember-me" color="accent" />}
                label="Remember Me"
              />
              <Link href="#" underline="hover" color="accent">
                Forgot Password?
              </Link>
            </Box>

            <Button variant="contained" color="accent" fullWidth>
              Log In
            </Button>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
