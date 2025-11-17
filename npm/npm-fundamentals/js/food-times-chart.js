import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

import { getFoodTimesKeys, getFoodTimesValues } from "./food.js";

// To utilize chart.js we need to register our components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export const renderFoodTimesChart = () => {
  // select the element
  const chartElement = document.querySelector("#food-times-chart");

  // TODO: set up my data
  const data = {
    labels: getFoodTimesKeys(),
    datasets: [
      {
        label: "How Hungry am I?",
        data: getFoodTimesValues(), // This should be an array of floats/ints
        fill: false,
        borderColor: "rgb(75,200,100)",
        tension: 0.1,
      },
    ],
  };
  // TODO: set up my config
  const config = {
    type: "line",
    data: data,
  };
  // TODO: render the chart
  const myChart = new Chart(chartElement, config);
};
