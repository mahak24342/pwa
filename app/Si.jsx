import React, { useEffect } from 'react'

const Si = ({handleClose}) => {
useEffect(()=>{
    function onKeyDown(event){
        if(event.keyCode===27){
            handleClose();
        }
    }
    document.addEventListener("keydown",onKeyDown);
    return ()=>{
        document.removeEventListener("keydown",onKeyDown);
    }
})

  return (
    <div>
        <h2>I am gonnna make it bigg</h2>
        <span onClick={handleClose}>Close</span>
    </div>
  )
}

export default Si