import { useState, Fragment } from "react";
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

const expenses = [
  { who: "Name 1", what: "onions", amount: 4.5 },
  { who: "Name 2", what: "bread", amount: 2.5 },
  { who: "Name 3", what: "meat", amount: 32.6 },
];

const ExpensesPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    whoPaid: "",
    whatPaidFor: "",
    amountPaid: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/result");
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

            <TextField
              type="text"
              label="Who"
              name="whoPaid"
              autoComplete="off"
              value={formData.whoPaid}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              type="text"
              label="What"
              name="whatPaidFor"
              autoComplete="off"
              value={formData.whatPaidFor}
              onChange={handleChange}
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
              value={formData.amountPaid}
              onChange={handleChange}
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
              <Fragment key={expense.index}>
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
                    {expense.who} paid {expense.amount} CA$ for {expense.what}
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

                {index < expenses.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Paper>

          <Box sx={{ width: "100%", maxWidth: 500, mb: 4 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/expenses")}
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
