import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
interface Props {
  chartData: any;
}
const BarChart = ({ chartData }: Props) => {
  return (
    <div>
      <Bar
        data={chartData}
        options={chartData.options}
        // options={}
      />
    </div>
  );
};

export default BarChart;
