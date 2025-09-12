import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ToggleColorMode from "../components/ToggleColorMode";

const AccountPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    displayName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Details:", formData);
    // You can add API call or routing logic here
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
              component="h2"
              sx={{ letterSpacing: ".2rem" }}
            >
              Hello User
            </Typography>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                letterSpacing: ".2rem",
                fontStyle: "italic",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              Here's your stuff
              <ContentPasteIcon
                sx={{
                  fontSize: 40,
                  color: theme.palette.text.icon,
                }}
              />
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            letterSpacing: ".2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
          }}
        >
          Account Settings
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            py: 3,
            textAlign: "center",
          }}
        >
          <Paper
            component="form"
            elevation={3}
            sx={{ p: 4, maxWidth: 500, width: "100%" }}
          >
            <Typography
              variant="h5"
              sx={{
                letterSpacing: ".1rem",
                textAlign: "center",
              }}
            >
              Update Your Details
            </Typography>

            <Box onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                margin="normal"
                value={formData.firstName}
                onChange={handleChange}
                required
                autoComplete="given-name"
              />
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                margin="normal"
                value={formData.lastName}
                onChange={handleChange}
                required
                autoComplete="family-name"
              />
              <TextField
                fullWidth
                label="Display Name"
                name="displayName"
                margin="normal"
                value={formData.displayName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Enter Password"
                name="password"
                type="password"
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Update Details
              </Button>
            </Box>
          </Paper>

          <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: "100%" }}>
            <ToggleColorMode />
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default AccountPage;
