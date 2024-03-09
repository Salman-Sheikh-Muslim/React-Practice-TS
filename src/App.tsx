import { useState } from "react";
import Charts from "./Charts";
import BarChart from "./BarChart";
import { UserData } from "./data/Data";
import LeavesChart from "./LeavesChart";
import data from "./data/userData";
import StackedExample from "./ProgressBae";
import CalendarIntegration from "./Calendar";
import DemoApp from "./FullCalendar/FullCalendar";
import LinkCalenndar from "./LinkCalendar/Linkalenndar";
import YourComponent from "./LinkCalendar/new";
import MyForm from "./FormEvent";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["green"],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Users Loss",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["red"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],

    options: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        title: {
          display: true,
          align: "start",
          // fontSize: 20,
          color: "black",
          text: "Users Bar Chart", // Add your own chart title
        },
      },
    },
  });

  const [userDataOptions, setUserDataOptions] = useState({
    options: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        title: {
          display: true,
          align: "start",
          // fontSize: 20,
          color: "black",
          text: "Users Bar Chart", // Add your own chart title
        },
      },
    },
  });
  return (
    <>
      {/* <Charts />

      <div style={{ width: "50%" }}>
        <BarChart chartData={userData} />
      </div> */}
      {/* <LeavesChart leavesData={data} /> */}
      {/* <StackedExample />
       */}
      {/* <CalendarIntegration></CalendarIntegration> */}
      {/* <DemoApp /> */}
      <LinkCalenndar />
      {/* <YourComponent /> */}
      <MyForm />
    </>
  );
}

export default App;
