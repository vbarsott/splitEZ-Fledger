import { Fragment, useMemo, useContext } from "react";
import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import { AppDataContext } from "../context/AppDataContext.jsx";
import BalanceCard from "../components/BalanceCard.jsx";
import GroupBalanceItem from "../components/GroupBalanceItem.jsx";

const ResultPage = () => {
  const { groups, expenses } = useContext(AppDataContext);

  const { total, valuePerPerson, groupsBalances } = useMemo(() => {
    let total = 0;
    let numberOfPeople = 0;
    const balances = groups.map((group) => ({
      ...group,
      totalPaid: 0,
      balance: 0,
    }));

    balances.forEach((gb) => {
      numberOfPeople += Number(gb.numberOfPeople);
    });

    expenses.forEach((expense) => {
      total += Number(expense.amountPaid);
      const group = balances.find((gb) => gb.groupName === expense.whoPaid);
      if (group) {
        group.totalPaid += Number(expense.amountPaid);
      }
    });

    const valuePerPerson = numberOfPeople > 0 ? total / numberOfPeople : 0;

    balances.forEach((gb) => {
      gb.balance = gb.totalPaid - gb.numberOfPeople * valuePerPerson;
    });

    return { total, valuePerPerson, groupsBalances: balances };
  }, [groups, expenses]);

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

            <BalanceCard label="Total" value={`CAD$ ${total.toFixed(2)}`} />

            <BalanceCard
              label="Value per person:"
              value={`CAD$ ${valuePerPerson.toFixed(2)}`}
            />
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
                <GroupBalanceItem group={gb} />
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
