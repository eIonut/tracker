import React, {useEffect, useRef, useState} from 'react'
import styled, { css } from "styled-components";

const ProgressBarContainer = styled.section`
  position: relative;
  background-color: rgba(0,0,0,0.2);
`;

const ProgressBar = styled.div`
  padding: 2rem;
  background-color: rgba(0, 255, 0, 0.5);
  width: ${(props) => props.barWidth + '%'}
`;

const ProgressText = styled.p`
  width: 100%;
  z-index: 9999;
  position: absolute;
  text-align: center;
  top: 11px;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
`;

const Completed = ({completedDays, maxDays}) => {
  const [isFull, setIsFull] = useState(false);
   useEffect(() => {
    if (completedDays === maxDays) {
      setIsFull(true);
    }
  }, [completedDays]);

  return (
    <ProgressBarContainer>
      <ProgressText>{completedDays} days to go</ProgressText>
      <ProgressBar barWidth={(completedDays / maxDays) * 100}/>
    </ProgressBarContainer>
  )
}

export default Completed
