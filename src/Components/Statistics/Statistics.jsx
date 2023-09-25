/* eslint-disable react-refresh/only-export-components */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["#FF444A", "#00C49F"],
      borderColor: ["#FFF"],
      borderWidth: 1,
    },
  ],
};

const Statistics = () => {
  return (
    <div className="w-1/3 mx-auto mt-10 pie-chart-container">
      <Pie data={data}></Pie>
    </div>
  );
};

export default Statistics;
