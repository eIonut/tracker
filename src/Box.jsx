import Day from "./Day";
import React, { useState, useEffect } from "react";

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const Box = () => {
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

  console.log(typeof days);

  useEffect(() => {
    window.localStorage.setItem("days", JSON.stringify(days));
  }, [days]);

  const changeDayStatus = (id, status) => {
    const newState = days.map((day) => {
      if (day.id === id) {
        return { ...day, completed: status };
      }
      return day;
    });
    setDays(newState);
  };

  return (
    <>
      {days.map((day) => (
        <Day changeDayStatus={changeDayStatus} key={day.id} day={day} />
      ))}
    </>
  );
};

export default Box;
