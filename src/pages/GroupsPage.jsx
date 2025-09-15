import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const groups = [
  { name: "Grupo 1", people: 4 },
  { name: "Grupo 2", people: 5 },
  { name: "Grupo 3", people: 9 },
];

const GroupsPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    groupName: "",
    numberOfPeople: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/expenses");
  };

  return (
    <>
      <Container maxWidth="sm">
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
            onSubmit={handleSubmit}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 500,
              width: "100%",
              p: 4,
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Step 1: Create a Group
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
                label="Group name"
                name="groupName"
                autoComplete="off"
                value={formData.groupName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                type="number"
                label="Number of people"
                name="numberOfPeople"
                autoComplete="number-of-people"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <Button type="submit" variant="contained" fullWidth>
                Add Group
              </Button>
            </Box>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 500,
              width: "100%",
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
              }}
            >
              Groups:
            </Typography>

            {groups.map((group, index) => (
              <Fragment key={group.name}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 1,
                    alignItems: "center",
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    {group.name} ({group.people} people)
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <EditIcon
                      sx={{ fontSize: 30, color: theme.palette.text.icon }}
                    />
                    <DeleteForeverIcon
                      sx={{ fontSize: 30, color: theme.palette.text.icon }}
                    />
                  </Box>
                </Box>

                {index < groups.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Paper>

          <Box sx={{ width: "100%", maxWidth: 500, mb: 4 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/expenses")}
            >
              Add the Expenses
              <KeyboardDoubleArrowRightIcon sx={{ ml: 1, fontSize: 30 }} />
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default GroupsPage;
