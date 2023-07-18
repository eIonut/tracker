import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DayBox = styled.div.attrs((props) => ({
  today: props.today,
  day: props.day.day,
  status: props.status,
}))`
  background-color: ${(props) =>
    props.status === "true"
      ? "rgba(0, 255, 0, 0.5)"
      : props.day === props.today
      ? "rgba(0, 0, 0, 0.2)"
      : "rgba(255, 255, 255, 1)"};
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  ${ props => props.day === props.today
    ? '&:hover {background-color: rgba(0, 0, 0, 0.4)}'
    : props.status === "true"
    ? "&:hover {background-color: rgba(0, 255, 0, 0.7)}"
    : '&:hover {background-color: rgba(0, 0, 0, 0.2)}'
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

  return (
    <DayBox
      today={new Date().getDate()}
      day={day}
      status={status.toString()}
      onClick={handleChangeDayStatus}
    >
      {day.day}
    </DayBox>
  );
};

export default Day;
