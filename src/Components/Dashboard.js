import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Chart } from "react-chartjs-2";

import Graph from "../Components/Graph";
import BankingChart from "./BankingChart";
import Charts from "./Charts";
import Header from "./Header";

export default function Home() {
  return (
    <div style={{ display: "flex",backgroundColor:"#56bdec" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid item xs={12} md={8} lg={11}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 350,
            }}
          >
            {/* <Charts /> */}
            <BankingChart />
          </Paper>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              {/* <Graph /> */}
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              <h3>Your Top Expenses</h3>
              <p style={{ textAlign: "center", marginTop: "2rem" }}>
                No Expense recorded for this fiscal year
              </p>
            </Paper>
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              <h3>Projects</h3>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  color: "blue",
                }}
              >
                Add Project(s) to this watchlist
              </p>
            </Paper>
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              <h3>Bank and Credit Cards</h3>
              <p style={{ textAlign: "center", marginTop: "2rem" }}>
                Yet to add Bank and Credit Card details <br />{" "}
                <a style={{ color: "blue" }}> Add Bank Account </a>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              <h3>Market Overview
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</h3>
              <p style={{ textAlign: "center", marginTop: "2rem" }}>
              $36,2531.00
USD

(+1.37%) <br />{" "}
                <a style={{ color: "blue" }}> Add Bank Account </a>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              <h3>Account Watchlist</h3>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

// import React from 'react'

// export default function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }
