"use client"

import React,{useState} from 'react'
import Si from './Si'

const Modal = () => {
    const [show ,setShow]=useState(false);

    const handleClose=()=>{
setShow(false);
    };
  return (
    <div onClick={()=>setShow(false)}>
        <button onClick={(e)=>
            {e.stopPropagation();
            setShow(true)}}>Click</button>
        {show ? <Si handleClose={handleClose}/> :null}
    </div>
  )
}

export default Modal