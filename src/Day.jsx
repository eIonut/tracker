import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const DayBox = styled.div`
  background-color: ${(props) => (props.status === "true" ? "green" : "")};
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  border-radius: 0.2rem;
  font-size: 1.6rem;
`;

const Day = ({ day, changeDayStatus }) => {
  const [status, setStatus] = useState(day.completed);

  const handleChangeDayStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    changeDayStatus(day.id, status);
  }, [status]);

  return (
    <DayBox status={status.toString()} onClick={handleChangeDayStatus}>
      {day.day}
      {/* {status ? <p>Done</p> : <p>Not done</p>} */}
    </DayBox>
  );
};

export default Day;
