import React from 'react'
import { ResumeButton, ResetButton, General } from '../Style/Buttons'

export default function Buttons(props) {

  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );

  
  const ActiveButtons = (
    <General>
      <ResetButton onClick={props.handleReset}>
        Reset
      </ResetButton>
      <ResetButton onClick={props.handlePauseResume}> 
        {props.isPaused ? "Resume" : "Pause"}
      </ResetButton>
    </General>
  );


  return (
    
    <div>

      <div>{props.active ? ActiveButtons : StartButton}</div>

    </div>
    
  )
}
