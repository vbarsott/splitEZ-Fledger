import { Box, Typography } from "@mui/material";

const GroupBalanceItem = ({ group }) => {
  return (
    <>
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
            color: group.balance < 0 ? "error.main" : "text.primary",
          }}
        >
          {group.groupName}: CA$ {group.balance.toFixed(2)}{" "}
          {group.balance < 0 ? " (To pay)" : " (To receive)"}
        </Typography>
      </Box>
    </>
  );
};

export default GroupBalanceItem;
