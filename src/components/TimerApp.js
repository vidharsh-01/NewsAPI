import React, { useEffect, useState } from 'react'

function TimerApp() {
    // state to store the seconds value
    const[seconds,setSeconds]=useState(0);
    // State to check whether the timer is running or not
    const[running,setRunning]=useState(false);
    // useEffect runs when running is true
    useEffect(()=>{
        let timer;
        // if running is true
        if(running){
            timer=setInterval(()=>{
                setSeconds(a=>a+1);

// each 1 second it will execute
             },1000);

        }return()=>clearInterval(timer);

    },[running]);




  return (
    <div>
        <h1>Timer Application</h1>
        <p>0 Seconds</p>
        <button onClick={()=>setRunning(true)}>Start</button>
        <button onClick={()=>setRunning(false)}>Stop</button>
        <button>Reset</button>

    </div>
  )
}

export default TimerApp