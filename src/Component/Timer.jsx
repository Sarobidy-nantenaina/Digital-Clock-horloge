import React, {useState } from "react";
import Input, { Decrementer } from "./InputTime";

function CountDown(){
    const [time,setTime]=useState(<Input />);
    const [status,setStatus]=useState(0);
    const timer={
        start(e){
          setStatus(1);
          e.preventDefault()
            setTime(<Decrementer/>)
        },
        resume(e){
          setStatus(2)
          e.preventDefault()
            setTime(<Decrementer/>)
        },
        reset(){
          setStatus(0)
          setTime(<Input/>)
        }
    }
    return(
      <>
      {time}
      <div className="start-reset">
         {(status===0) ? 
           <button className="button-start" onClick={timer.start} >Start</button> : ""
          }

         {(status===1) ? 
           <div>
             <button className="button-start" onClick={timer.resume} >Resume</button>
             <button className="button-reset" onClick={timer.reset}>Reset</button>
            </div> : ""
          }
         {(status===2) ? 
           <div>
             <button className="button-resume" onClick={timer.resume} >Resume</button>
             <button className="button-reset" onClick={timer.reset}>Reset</button>
            </div> : ""
          }
      </div>
      </>
    )
  }

  export default CountDown;