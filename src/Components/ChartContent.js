import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 40, 5, 67, 20, 30, 45],
    },
  ],
};

export const ChartContent = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};
