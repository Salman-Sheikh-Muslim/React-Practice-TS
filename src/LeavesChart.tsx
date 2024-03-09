import React, { useState, ChangeEvent } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

interface LeaveData {
  label: string;
  TotalValue: number;
  Takean: number;
  Left: number;
}

interface UserData {
  UserName: string;
  UserData: LeaveData[];
}

interface Props {
  leavesData: UserData[];
}

const LeavesChart = ({ leavesData }: Props) => {
  const [selectedUser, setSelectedUser] = useState(leavesData[0].UserName);

  const selectedUserData =
    leavesData.find((user) => user.UserName === selectedUser)?.UserData || [];

  const data = {
    labels: selectedUserData.map((item) => item.label),
    datasets: [
      {
        label: "Taken",
        backgroundColor: "rgba(75,192,192,0.6)",
        data: selectedUserData.map((item) =>
          item.Takean !== 0 ? item.Takean : null
        ),
      },
      {
        label: "Left",
        backgroundColor: "rgba(255,99,132,0.6)",
        data: selectedUserData.map((item) =>
          item.Left !== 0 ? item.Left : item.TotalValue
        ),
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  const handleUserChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div>
      <select onChange={handleUserChange} value={selectedUser}>
        {leavesData.map((user) => (
          <option key={user.UserName} value={user.UserName}>
            {user.UserName}
          </option>
        ))}
      </select>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LeavesChart;
