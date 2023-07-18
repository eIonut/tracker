import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Box from "./Box";
import Completed from "./Completed";

const TrackPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MonthTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
`;

const DaysCounter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.6rem;
`;

const TrackPage = ({ days, setDays }) => {
  const completedDays = days.filter((day) => {
    if (day.completed) {
      return true;
    }

    return false;
  }).length;

  const incompletedDays = days.filter((day) => {
    if (!day.completed) {
      return true;
    }

    return false;
  }).length;

  const [daysCounter, setDaysCounter] = useState({
    completedDays,
    incompletedDays,
  });

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = months[date.getMonth()];
  const [month, setMonth] = useState(currentMonth);

  const daysC = (
    <DaysCounter>
      <span>
        {daysCounter.completedDays
          ? "Days completed: " + daysCounter.completedDays
          : "Start the goal by checking a day"}
      </span>
      <span>Days to go: {daysCounter.incompletedDays}</span>
    </DaysCounter>
  );

  useEffect(() => {
    setDaysCounter({ completedDays, incompletedDays });
  }, [days]);
  return (
    <TrackPageContainer>
      <div>
        {<MonthTitle>{month}</MonthTitle>}
        <Box days={days} setDays={setDays} />
        <Completed maxDays={completedDays + incompletedDays} completedDays={completedDays}/>
        {daysCounter.completedDays === days.length
          ? "You have completed the goal! Congrats!"
          : daysC}
      </div>
    </TrackPageContainer>
  );
};

export default TrackPage;
