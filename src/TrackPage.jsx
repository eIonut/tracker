import Day from "./Day";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Box from "./Box";

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
const TrackPage = () => {
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

  return (
    <TrackPageContainer>
      <div>
        {<MonthTitle>{month}</MonthTitle>}
        <Box />
        <DaysCounter>
          <span>Days left: 10</span>
          <span>Days completed: 21</span>
        </DaysCounter>
      </div>
    </TrackPageContainer>
  );
};

export default TrackPage;
