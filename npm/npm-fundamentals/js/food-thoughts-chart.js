import {
  Chart,
  DoughnutController,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

// Register each of the above components with our Chartjs library
Chart.register(
  DoughnutController,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

import { getFoodThoughtKeys, getFoodThoughtsValues } from "./food.js";

const renderFoodThoughtsChart = () => {
  // Select the chart element
  let chartElement = document.querySelector("#food-thoughts-chart");

  // Setup our data
  const data = {
    labels: getFoodThoughtKeys(),
    datasets: [
      {
        label: "Food Thoughts",
        data: getFoodThoughtsValues(),
        backgroundColor: [
          "red",
          "green",
          "blue",
          "yellow",
          "orange",
          "purple",
          "pink",
          "black",
        ],
      },
    ],
  };

  // Setup our config
  const config = {
    type: "doughnut",
    data: data,
  };

  // Render the chart
  const myChart = new Chart(chartElement, config);
};

export { renderFoodThoughtsChart };
