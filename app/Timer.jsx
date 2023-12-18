import React, { useEffect } from 'react'

const Timer = () => {
    const[time,setTime]=useState(0);

    useEffect(()=>{
handleTime();
return()=>clearInterval(id.current);
},[]);
 let id=useRef();
 function handleTime(){

    id.current=setInterval(()=>{
        setTime((prev)=>prev+1);
    },1000);
 };
 
    return (
        <>
    <div>Timer</div>
  <h1>{time}</h1>
  </>
    )
}

export default Timer