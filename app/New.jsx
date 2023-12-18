"use client"
import React, {useState, useEffect ,createContext} from 'react'
import Next from './Next'

export const Context=createContext();
const New = () => {
    const [counter,setCounter]=useState(0);
    const [ad,setAd]=useState();

    useEffect(()=>{
        async function handleAd(){
            const data= await fetch(
                `https://api.coindesk.com/v1/bpi/currentprice.json${counter}`,
            );
            const json=await data.json();
            setAd(json);

        }
        handleAd();
    },[counter]);
    
    const handleInc=()=>{
        setCounter((prev)=>prev+1);
    };
  return (
    <Context.Provider value={{ad}}>
    <div>
        <h2>{counter}</h2>
        <button onClick={handleInc}>Click</button>
<Next/>
    </div>
    </Context.Provider>
  )
}

export default New