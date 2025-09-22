import { Box, Typography } from "@mui/material";

const BalanceCard = ({ label, value }) => {
  return (
    <>
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
        <Typography>{label}</Typography>
        <Typography>{value}</Typography>
      </Box>
    </>
  );
};

export default BalanceCard;
