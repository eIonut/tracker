import Day from "./Day";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const DaysContainer = styled.section`
  display: flex;
  width: 50rem;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 4rem 0 4rem 0;
`;

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

  const [daysCounter, setDaysCounter] = useState(days);

  useEffect(() => {
    window.localStorage.setItem("days", JSON.stringify(days));
  }, [days]);

  const changeDayStatus = (id, status) => {
    const newState = days.map((day) => {
      days;
      if (day.id === id) {
        return { ...day, completed: status };
      }
      return day;
    });
    setDays(newState);
  };

  return (
    <DaysContainer>
      {days.map((day) => (
        <Day changeDayStatus={changeDayStatus} key={day.id} day={day} />
      ))}
    </DaysContainer>
  );
};

export default Box;
