import { useState, Fragment, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner.jsx";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AppDataContext } from "../context/AppDataContext.jsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ExpensesPage = () => {
  const {
    groups,
    expenses,
    setExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
  } = useContext(AppDataContext);

  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [amountPaid, setAmountPaid] = useState("");
  const [whoPaid, setWhoPaid] = useState("");
  const [paidWhat, setPaidWhat] = useState("");

  const [editState, setEditState] = useState({
    id: null,
    whoPaid: "",
    paidWhat: "",
    amountPaid: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      const expenseData = {
        amountPaid: Number(amountPaid),
        whoPaid,
        paidWhat,
      };

      try {
        const newExpense = await addExpense(expenseData);
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        toast.success("Expense added!");
      } catch (error) {
        console.error("Error adding expense:", error);
        toast.error("Failed to add expense.");
      } finally {
        setLoading(false);
        setWhoPaid("");
        setPaidWhat("");
        setAmountPaid("");
      }
    },
    [amountPaid, whoPaid, paidWhat, addExpense, setExpenses]
  );

  const handleEditClick = useCallback((expense) => {
    setEditState({
      id: expense.id,
      whoPaid: expense.whoPaid,
      paidWhat: expense.paidWhat,
      amountPaid: expense.amountPaid,
    });
  }, []);

  const handleDeleteClick = useCallback(
    async (expenseId) => {
      setLoading(true);
      try {
        await deleteExpense(expenseId);
        setExpenses((prevExpenses) =>
          prevExpenses.filter((e) => e.id !== expenseId)
        );
        toast.success("Expense deleted successfully!");
      } catch (error) {
        console.error("Error deleting expense:", error);
        toast.error("Failed to delete expense.");
      } finally {
        setLoading(false);
      }
    },
    [deleteExpense, setExpenses]
  );

  const handleSaveClick = useCallback(async () => {
    try {
      setLoading(true);
      const updatedExpense = {
        whoPaid: editState.whoPaid,
        paidWhat: editState.paidWhat,
        amountPaid: editState.amountPaid,
      };
      const result = await updateExpense(editState.id, updatedExpense);
      setExpenses((prevExpenses) =>
        prevExpenses.map((e) => (e.id === editState.id ? result : e))
      );
      toast.success("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      toast.error("Failed to save changes.");
    } finally {
      setLoading(false);
      setEditState({ id: null, whoPaid: "", paidWhat: "", amountPaid: "" });
    }
  }, [editState, updateExpense, setExpenses]);

  const handleCancelClick = () => {
    setEditState({ id: null, whoPaid: "", paidWhat: "", amountPaid: "" });
    toast.info("Edit cancelled.");
  };

  if (loading) return <Spinner loading={true} />;

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
              Step 2: Add the expenses
            </Typography>

            <FormControl fullWidth required>
              <InputLabel id="whoPaid-label">Who</InputLabel>
              <Select
                labelId="whoPaid-label"
                aria-labelledby="whoPaid-label"
                id="whoPaid"
                name="whoPaid"
                value={whoPaid}
                onChange={(e) => setWhoPaid(e.target.value)}
                label="Who"
              >
                {groups.map((group) => (
                  <MenuItem key={group.id} value={group.groupName}>
                    {group.groupName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="paidWhat"
              name="paidWhat"
              type="text"
              label="What"
              autoComplete="off"
              value={paidWhat}
              onChange={(e) => setPaidWhat(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              id="amountPaid"
              name="amountPaid"
              type="text"
              label="How Much CA$"
              placeholder="CA$"
              autoComplete="off"
              value={amountPaid}
              onChange={(e) => setAmountPaid(Number(e.target.value))}
              variant="outlined"
              fullWidth
              required
            />

            <Button type="submit" variant="contained" fullWidth>
              Add Expense
            </Button>
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
              Expenses:
            </Typography>

            {expenses.map((expense, index) => (
              <Fragment key={expense.id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 1,
                    alignItems: "center",
                    py: 1,
                  }}
                >
                  {editState.id === expense.id ? (
                    <>
                      <FormControl fullWidth required>
                        <InputLabel id="whoPaid-label-edit">Who</InputLabel>
                        <Select
                          labelId="whoPaid-label-edit"
                          aria-labelledby="whoPaid-label-edit"
                          id="editedWhoPaid"
                          name="editedWhoPaid"
                          value={editState.whoPaid}
                          onChange={(e) =>
                            setEditState((prev) => ({
                              ...prev,
                              whoPaid: e.target.value,
                            }))
                          }
                          label="Who"
                        >
                          {groups.map((group) => (
                            <MenuItem key={group.id} value={group.groupName}>
                              {group.groupName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <TextField
                        value={editState.paidWhat}
                        onChange={(e) =>
                          setEditState((prev) => ({
                            ...prev,
                            paidWhat: e.target.value,
                          }))
                        }
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        type="number"
                        value={editState.amountPaid}
                        onChange={(e) =>
                          setEditState((prev) => ({
                            ...prev,
                            amountPaid: Number(e.target.value),
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
                      {expense.whoPaid} paid CA${expense.amountPaid} for{" "}
                      {expense.paidWhat}
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
                      onClick={() => handleEditClick(expense)}
                      aria-label="Edit expense"
                    >
                      <EditIcon
                        sx={{ fontSize: 30, color: theme.palette.text.icon }}
                      />
                    </IconButton>

                    <IconButton
                      onClick={() => handleDeleteClick(expense.id)}
                      aria-label="Delete expense"
                    >
                      <DeleteForeverIcon
                        sx={{ fontSize: 30, color: theme.palette.text.icon }}
                      />
                    </IconButton>
                  </Box>
                </Box>

                {index < expenses.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Paper>

          <Box sx={{ width: "100%", maxWidth: 500, mb: 4 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/result")}
            >
              Check the Result
              <KeyboardDoubleArrowRightIcon sx={{ ml: 1, fontSize: 30 }} />
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ExpensesPage;
