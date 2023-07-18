import "./App.css";
import TrackPage from "./TrackPage";
import { useState } from "react";

function App() {
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const date = new Date();

  const daysInCurrentMonth = getDaysInMonth(
    date.getFullYear(),
    date.getMonth() + 1
  );

  const daysInMonth = Array.from(
    { length: daysInCurrentMonth },
    (_, i) => i + 1
  ).map((day) => {
    return { day, id: day, completed: false };
  });
  const [days, setDays] = useState(
    () => JSON.parse(window.localStorage.getItem("days")) || daysInMonth
  );

  return <TrackPage days={days} setDays={setDays} />;
}

export default App;
