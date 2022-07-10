import React, { useEffect, useState } from "react";
import {CountDown} from './Timer'

function Input(){
    let take={
      hours(e){
        e.preventDefault()
        heure=e.target.value;
      },
      minutes(e){
        e.preventDefault()
        minute=e.target.value;
      },
      seconds(e){
        e.preventDefault()
        seconde=e.target.value;
      }
    }
      return(
        <div id="input">
           <input  maxLength={2} onInput={take.hours}></input>:
           <input  maxLength={2} onInput={take.minutes}></input>:
           <input  maxLength={2} onInput={take.seconds}></input>
       </div>
      )
}
  

let heure=0;
let minute=0;
let seconde=0;

export function Decrementer(){
  const [[h,m,s],setTime] = useState([heure,minute,seconde])
    let test;
  
    useEffect( ()=>{test = setInterval(()=>{
      if(s > 0){
          setTime([h,m,s-1]);
      }
      else if(s == 0 && m > 0){
        setTime([h,m-1,60]);
      }
      else if(s == 0 && m == 0 && h >0){
        setTime([h-1,60,s]);
      }
      else if(s == 0 && m == 0 && h == 0){
         clearInterval(test);
         alert('time out');
      }
    },1000);
   return ()=>{
     clearInterval(test);
   }
})

   function Stop(){
     clearInterval(test);
   }
    return (
      <div id="decrement">
        <span>{h.toString().padStart(2, "0")}</span>:
        <span>{m.toString().padStart(2, "0")}</span>:
        <span>{s.toString().padStart(2, "0")}</span>
        <div id="stop">
          <button className="stop" onClick={Stop}>stop</button>
        </div>
      </div>
    )
}

  export default Input;
