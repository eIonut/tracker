import React, {useEffect, useRef, useState} from 'react'
import styled, { css } from "styled-components";

const ProgressBarContainer = styled.section`
  position: relative;
  background-color: rgba(0,0,0,0);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`;

const ProgressBar = styled.div`
  padding: 2rem;
  background-color: rgba(0, 255, 0, 0.5);
  width: ${(props) => props.barWidth ? props.barWidth + '%' : "0px"}
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
  console.log('completed ran')
  const [isFull, setIsFull] = useState(false);
   useEffect(() => {
    if (completedDays === maxDays) {
      setIsFull(true);
    }
  }, [completedDays]);

  return (
    <ProgressBarContainer>
      <ProgressText>{maxDays - completedDays ? <p>{maxDays - completedDays} days to go</p> : 'Goal complete!'}</ProgressText>
      <ProgressBar barWidth={(completedDays / maxDays) * 100}/>
    </ProgressBarContainer>
  )
}

export default React.memo(Completed)
