import { Grid, TextField, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const fromStyle = {
  border: "1px solid gray",
  padding: "40px",
  margin: "10px",
  height: "fit-content",
};

const ViewUserDeatls = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <div style={{ ...fromStyle }}>
        <Grid container direction={"column"} spacing={3}>
          <Grid item>
            <Typography variant="h6">User Details</Typography>
          </Grid>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData && userData.map((row, id) => (
                  <TableRow key={row.id}>
                    <TableCell>{id + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>
    </>
  );
};

export default ViewUserDeatls;
