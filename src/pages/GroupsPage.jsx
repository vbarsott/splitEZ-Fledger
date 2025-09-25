import { useState, useContext, useCallback, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AppDataContext } from "../context/AppDataContext.jsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const GroupsPage = () => {
  const { groups, setGroups, addGroup, deleteGroup, updateGroup } =
    useContext(AppDataContext);

  const theme = useTheme();
  const navigate = useNavigate();

  const [groupName, setGroupName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [editState, setEditState] = useState({ id: null, name: "", count: "" });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const groupData = {
        groupName,
        numberOfPeople: Number(numberOfPeople),
      };

      try {
        const newGroup = await addGroup(groupData);
        setGroups((prevGroups) => [...prevGroups, newGroup]);
        toast.success("Group added!");
      } catch (error) {
        console.error("Error adding group:", error);
        toast.error("Failed to add group.");
      } finally {
        setGroupName("");
        setNumberOfPeople("");
      }
    },
    [groupName, numberOfPeople, addGroup, setGroups]
  );

  const handleEditClick = useCallback((group) => {
    setEditState({
      id: group.id,
      name: group.groupName,
      count: group.numberOfPeople,
    });
  }, []);

  const handleDeleteClick = useCallback(
    async (groupId) => {
      try {
        await deleteGroup(groupId);
        setGroups((prevGroups) => prevGroups.filter((g) => g.id !== groupId));
        toast.success("Group deleted successfully!");
      } catch (error) {
        console.error("Error deleting group:", error);
        toast.error("Failed to delete group.");
      }
    },
    [deleteGroup, setGroups]
  );

  const handleSaveClick = useCallback(async () => {
    try {
      const updatedGroup = {
        groupName: editState.name,
        numberOfPeople: editState.count,
      };

      const result = await updateGroup(editState.id, updatedGroup);
      setGroups((prevGroups) =>
        prevGroups.map((g) => (g.id === editState.id ? result : g))
      );

      toast.success("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      toast.error("Failed to save changes.");
    } finally {
      setEditState({ id: null, name: "", count: "" });
    }
  }, [editState, updateGroup, setGroups]);

  const handleCancelClick = () => {
    setEditState({ id: null, name: "", count: "" });
    toast.info("Edit cancelled.");
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
              Step 1: Create a group
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
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                type="number"
                label="Number of people"
                name="numberOfPeople"
                autoComplete="number-of-people"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(Number(e.target.value))}
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
              <Fragment key={group.id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 1,
                    py: 1,
                  }}
                >
                  {editState.id === group.id ? (
                    <>
                      <TextField
                        value={editState.name}
                        onChange={(e) =>
                          setEditState((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        type="number"
                        value={editState.count}
                        onChange={(e) =>
                          setEditState((prev) => ({
                            ...prev,
                            count: Number(e.target.value),
                          }))
                        }
                        variant="outlined"
                        fullWidth
                      />
                      <Button variant="contained" onClick={handleSaveClick}>
                        Save
                      </Button>
                      <Button variant="contained" onClick={handleCancelClick}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    >
                      {group.groupName} ({group.numberOfPeople} people)
                    </Typography>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      onClick={() => handleEditClick(group)}
                      aria-label="Edit group"
                    >
                      <EditIcon
                        sx={{ fontSize: 30, color: theme.palette.text.icon }}
                      />
                    </IconButton>

                    <IconButton
                      onClick={() => handleDeleteClick(group.id)}
                      aria-label="Delete group"
                    >
                      <DeleteForeverIcon
                        sx={{ fontSize: 30, color: theme.palette.text.icon }}
                      />
                    </IconButton>
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
