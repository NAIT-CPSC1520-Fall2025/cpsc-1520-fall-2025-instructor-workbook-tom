// this is our main file because we've imported it in our html.
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

import { renderFoodTimesChart } from "./food-times-chart";
import { renderFoodThoughtsChart } from "./food-thoughts-chart";

renderFoodTimesChart();
renderFoodThoughtsChart();
