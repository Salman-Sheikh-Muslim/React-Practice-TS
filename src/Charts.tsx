import "./Charts.css";
import { Chart, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "./data/sourceData.json";
import revenueData from "./data/revenueData.json";

import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
// defaults.plugins.title.fontSize = 20;
defaults.plugins.title.color = "black";

function Charts() {
  return (
    <>
      <div className="dataCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: ["rgba(43, 63, 229, 0.8)"],
                borderColor: "rgba(83, 73, 250, 0.8)",
                // borderRadius: 5,
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: ["rgba(250, 192, 19, 0.8)"],
                borderColor: "rgba(250, 200, 19, 0.8)",
                // borderRadius: 5,
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue and Cost",
              },
            },
          }}
        />
      </div>
      <div className="dataCard">
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400],
              },
              {
                label: "loss",
                data: [70, 80, 90],
              },
            ],
          }}
        />
      </div>
      <div className="dataCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
      <div className="dataCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Charts;
