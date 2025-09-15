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
          pt: 4,
          pb: 4,
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
              component="h2"
            >
              Hello User
            </Typography>

            <Typography
              variant="h4"
              component="h3"
              sx={{
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

      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 4,
          }}
        >
          Account Settings
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
            textAlign: "center",
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
              mt: 4,
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
              }}
            >
              Update Your Details
            </Typography>

            <Box
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                type="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                type="text"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                type="text"
                label="Display Name"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
              <TextField
                type="password"
                label="Enter Password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <Button type="submit" variant="contained" fullWidth>
                Update Details
              </Button>
            </Box>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              display: "flex",
              maxWidth: 500,
              width: "100%",
              mb: 4,
              p: 4,
            }}
          >
            <ToggleColorMode />
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default AccountPage;
