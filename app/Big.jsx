"use client"
import React,{useState,useEffect} from 'react'

const Big = () => {
  const [toggle,setToggle]=useState(false);
  useEffect(()=>{
    let timer=setTimeout(()=>{
      setToggle(!toggle);
    },1000);
  return ()=>{
    clearTimeout(!timer);
  };
  },[]);
  return (
    <div className={toggle? "dark-mode text-white":"app"}>
<h2>FUCKK</h2>
<button onClick={()=>setToggle(!toggle)

}  >Toggle</button>
    </div>
  )
}

export default Big