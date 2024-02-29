import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const IncCount = () => {
    setCount(count + 1);
  };

  const DecCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3 style={{ height: 30, width: "100%", fontSize: 25 }}>
        Counter Increment / Decrement
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" onClick={IncCount}>
          ➕
        </Button>
        <TextField
          style={{
            height: 45,
            width: 200,
          }}
          //   size="small"
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          id="outlined-basic"
          label="Enter Number"
          variant="outlined"
          value={count}
          onChange={(e) => setCount(Math.trunc(e.target.value))}
        />
        <Button variant="outlined" onClick={DecCount} disabled={count === 0}>
          ➖
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button variant="outlined" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
};
