import { useState, Fragment, useEffect } from "react";
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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ExpensesPage = ({ addExpenseSubmit, deleteExpense, updateExpense }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [amountPaid, setAmountPaid] = useState("");
  const [whoPaid, setWhoPaid] = useState("");
  const [paidWhat, setPaidWhat] = useState("");
  const [expenses, setExpenses] = useState([]);

  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [editedWhoPaid, setEditedWhoPaid] = useState("");
  const [editedPaidWhat, setEditedPaidWhat] = useState("");
  const [editedAmountPaid, setEditedAmountPaid] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await fetch("/api/expenses");
        const data = await res.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchExpenses();
  }, []);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("/api/groups");
        const data = await res.json();
        setGroups(data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };
    fetchGroups();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expenseData = {
      amountPaid: Number(amountPaid),
      whoPaid,
      paidWhat,
    };

    try {
      const newExpense = await addExpenseSubmit(expenseData);
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      whoPaid("");
      paidWhat("");
      amountPaid("");
    } catch (error) {
      console.error("Error adding expense:", error);
    } finally {
      setWhoPaid("");
      setPaidWhat("");
      setAmountPaid("");
    }
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
              Step 2: Add the expenses
            </Typography>

            <FormControl fullWidth required>
              <InputLabel id="whoPaid-label">Who</InputLabel>
              <Select
                labelId="whoPaid-label"
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
              type="text"
              label="What"
              name="whatPaidFor"
              autoComplete="off"
              value={paidWhat}
              onChange={(e) => setPaidWhat(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              type="text"
              label="How Much CA$"
              name="amountPaid"
              placeholder="CA$"
              autoComplete="off"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
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
                  {editingExpenseId === expense.id ? (
                    <>
                      <FormControl fullWidth required>
                        <InputLabel id="whoPaid-label-edit">Who</InputLabel>
                        <Select
                          labelId="whoPaid-label-edit"
                          value={editedWhoPaid}
                          onChange={(e) => setEditedWhoPaid(e.target.value)}
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
                        value={editedPaidWhat}
                        onChange={(e) => setEditedPaidWhat(e.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        type="number"
                        value={editedAmountPaid}
                        onChange={(e) => setEditedAmountPaid(e.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                      <Button
                        variant="contained"
                        onClick={async () => {
                          const updatedExpense = {
                            whoPaid: editedWhoPaid,
                            paidWhat: editedPaidWhat,
                            amountPaid: editedAmountPaid,
                          };
                          const result = await updateExpense(
                            expense.id,
                            updatedExpense
                          );
                          setExpenses((prevExpenses) =>
                            prevExpenses.map((e) =>
                              e.id === expense.id ? result : e
                            )
                          );
                          setEditingExpenseId(null);
                        }}
                      >
                        Save
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
                    <EditIcon
                      onClick={() => {
                        setEditingExpenseId(expense.id);
                        setEditedWhoPaid(expense.whoPaid);
                        setEditedPaidWhat(expense.paidWhat);
                        setEditedAmountPaid(expense.amountPaid);
                      }}
                      sx={{ fontSize: 30, color: theme.palette.text.icon }}
                    />
                    <DeleteForeverIcon
                      onClick={() => {
                        deleteExpense(expense.id);
                        setExpenses((prevExpenses) =>
                          prevExpenses.filter((e) => e.id !== expense.id)
                        );
                      }}
                      sx={{ fontSize: 30, color: theme.palette.text.icon }}
                    />
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
