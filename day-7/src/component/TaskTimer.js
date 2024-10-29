import React, { useRef, useState } from 'react'

const TaskTimer = () => {
    const[timeExpire,setTimeExpire]=useState(false);
    const id = useRef();
    function handleStart(){
        id.current = setTimeout(()=> {
            setTimeExpire(true);
            console.log("start" + id.current);
        },5000);
    }
    function handleStop() {
        clearTimeout(id.current);
        console.log("stop" + id.current);
    }
  return (
    <div>
        <h2>Timer Component </h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        {timeExpire && <p>Timer Expired</p>}
    </div>
  )
}

export default TaskTimer