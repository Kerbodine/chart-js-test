import React, { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { userData } from "./data";

const App = () => {
  const [data, setData] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gain",
        data: userData.map((data) => data.userGain),
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        borderColor: ["#3e95cd"],
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="w-full flex">
      <div className="mx-auto space-y-12 p-24">
        <div className="w-[480px]">
          <BarChart data={data} />
        </div>
        <div className="w-[480px]">
          <LineChart data={data} />
        </div>
        <div className="w-[480px]">
          <PieChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
