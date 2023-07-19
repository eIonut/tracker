import Day from "./Day";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import DaysContext from "./DaysContext";

const DaysContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.2rem;
  padding: 2rem;
`;

const Box = () => {
  const { days, setDays } = useContext(DaysContext);
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

  useEffect(() => {
    window.localStorage.setItem("days", JSON.stringify(days));
  }, [days]);

  return (
    <DaysContainer>
      {days.map((day) => (
        <Day changeDayStatus={changeDayStatus} key={day.id} day={day} />
      ))}
    </DaysContainer>
  );
};

export default Box;
