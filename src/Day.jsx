import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const DayBox = styled.div.attrs((props) => ({
  today: props.today,
  day: props.day.day,
  status: props.status,
}))`
  background-color: ${(props) =>
    props.status === "true"
      ? "rgba(0, 255, 0, 0.6)"
      : props.day === props.today
      ? "rgba(0, 0, 0, 0.2)"
      : ""};
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    filter: saturate(500%);
  }
  transition: all 0.2s ease-out;
  border-radius: 50%;
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

  const d = new Date();
  const today = d.getDate();

  return (
    <DayBox
      today={today}
      day={day}
      status={status.toString()}
      onClick={handleChangeDayStatus}
    >
      {day.day}
    </DayBox>
  );
};

export default Day;
