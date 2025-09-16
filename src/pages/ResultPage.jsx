import { Fragment } from "react";
import { Box, Container, Divider, Paper, Typography } from "@mui/material";

const ResultPage = () => {
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
              <Typography>CAD$ 0.00</Typography>
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
              <Typography>CAD$ 0.00</Typography>
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
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Result:
            </Typography>

            <Fragment>
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
                  "Who": CA$ 0.00 (To receive)
                </Typography>
              </Box>

              <Divider />

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
                  "Who": CA$ 0.00 (To receive)
                </Typography>
              </Box>
            </Fragment>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default ResultPage;
