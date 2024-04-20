import React from "react";
import { Line } from "react-chartjs-2";

const PredictionAreaChart = () => {
  const data = {
    labels: ["1 year", "2 years", "3 years", "5 years"],
    datasets: [
      // Actual data
      {
        label: "Actual Data",
        data: [0, 1, 2.3], // Add as many points as you have actual data for
        fill: true,
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",

        pointBorderColor: "rgba(0, 123, 255, 1)",
      },

      {
        label: "Prediction",
        data: [null, null, 2.3, 4.2], // null for actual data, then prediction
        fill: true,
        backgroundColor: "rgba(255, 193, 7, 0.2)", // Match the overlay color
        borderColor: "rgba(255, 193, 7, 1)", // Prediction border color
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false, // This will remove the Y-axis entirely
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return <Line data={data} options={options} />;
};

export default PredictionAreaChart;
