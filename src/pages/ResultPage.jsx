import { useState, Fragment, useEffect } from "react";
import { Box, Container, Divider, Paper, Typography } from "@mui/material";

const ResultPage = () => {
  const [groups, setGroups] = useState([]);
  const [expenses, setExpenses] = useState([]);

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

  let total = 0;
  let groupsBalances = groups.map((group) => ({ ...group }));
  let numberOfPeople = 0;

  groupsBalances.map((gb) => {
    gb.totalPaid = 0;
    gb.balance = 0;
    numberOfPeople += Number(gb.numberOfPeople);
  });

  expenses.map((expense) => {
    total += Number(expense.amountPaid);
    const group = groupsBalances.find((gb) => gb.groupName === expense.whoPaid);
    if (group) {
      group.totalPaid += Number(expense.amountPaid);
    }
  });

  const valuePerPerson = numberOfPeople > 0 ? total / numberOfPeople : 0;
  groupsBalances.map((gb) => {
    gb.balance = gb.totalPaid - gb.numberOfPeople * valuePerPerson;
  });

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
              Step 3: Check the result
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid",
                borderColor: "grey.400",
                borderRadius: 1,
                padding: "16.5px 14px",
              }}
            >
              <Typography>Total</Typography>
              <Typography>{total.toFixed(2)}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid",
                borderColor: "grey.400",
                borderRadius: 1,
                padding: "16.5px 14px",
              }}
            >
              <Typography>Value per person:</Typography>
              <Typography>CAD$ {valuePerPerson.toFixed(2)}</Typography>
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
              mb: 4,
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Result:
            </Typography>

            {groupsBalances.map((gb, index) => (
              <Fragment key={gb.id}>
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
                      color: gb.balance < 0 ? "error.main" : "text.primary",
                    }}
                  >
                    {gb.groupName}: CA$ {gb.balance.toFixed(2)}{" "}
                    {gb.balance < 0 ? " (To pay)" : " (To receive)"}
                  </Typography>
                </Box>
                {index < groupsBalances.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default ResultPage;
