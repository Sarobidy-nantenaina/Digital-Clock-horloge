import React, {useState } from "react";

import Clock from "./Clock";
import './Clock.css';
import CountDown from "./Timer";
export function TimerMode(){
  const [Page,setPage]=useState(<Clock/>);
  const [status,setStatus]=useState(0);
  function Clicked(evt){
      evt.preventDefault();
      if(status==0){
          setStatus(1)
          setPage(<CountDown/>)
          console.log(status);
      }
      else if(!status==0){
          setStatus(0)
          setPage(<Clock/>)
          console.log(status);
      }
  }
  return(<>
      {Page}
      <button className="setmode" onClick={Clicked}>Set time mode</button>
      </>
  )
}