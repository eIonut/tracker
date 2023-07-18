import React, { useEffect, useState } from "react";

const Day = ({ day, changeDayStatus }) => {
  const [status, setStatus] = useState(day.completed);

  const handleChangeDayStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    changeDayStatus(day.id, status);
  }, [status]);

  return (
    <>
      <button onClick={handleChangeDayStatus}>{day.day}</button>
      {status ? <p>Done</p> : <p>Not done</p>}
    </>
  );
};

export default Day;
