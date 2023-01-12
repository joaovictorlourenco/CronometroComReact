import React from 'react'
import { ResumeButton, ResetButton, DivBtn, StartButtonStyle, DivContainer } from '../Style/Buttons'

export default function Buttons(props) {

  const StartButton = (
    <StartButtonStyle onClick={props.handleStart}>
      Start
    </StartButtonStyle>
  );

  
  const ActiveButtons = (
    <DivBtn>
      <ResetButton onClick={props.handleReset}>
        Reset
      </ResetButton>
      <ResumeButton onClick={props.handlePauseResume}> 
        {props.isPaused ? "Resume" : "Pause"}
      </ResumeButton>
    </DivBtn>
  );


  return (
    
    <DivContainer>

        <div>{props.active ? ActiveButtons : StartButton}</div>

    </DivContainer>
    
  )
}
