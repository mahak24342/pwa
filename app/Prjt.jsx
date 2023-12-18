"use client"
import html2canvas from 'html2canvas';
import React, { useState } from 'react'

const Prjt = () => {
  const [input,setInput]=useState({

    username:"",
    age:"",
    aadhar:"",
    pan:"",
    drivinglicense:"",
    passport:"",
   
  
});
 const [records,setRecords]=useState([]);
 
const handleSubmit=(e)=>{
  e.preventDefault();
  const newRecord={...input,id:new Date().getTime().toString()}
setRecords([...records,newRecord]);
setInput({ username:"",
age:"",
aadhar:"",
pan:"",
drivinglicense:"",
passport:"",
})
}


  const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value;
setInput({...input,[name]:value})
  }
const CaptureImage=()=>{
  html2canvas(document.body).then(function(canvas){
var a=document.createElement('a');
a.href=canvas.toDataURL('../jpeg').replace("image/jpeg","image/octet-stream");
a.download='somefilename.jpg';
a.click();


  }
  )
}


    return (



    <div className='flex flex-col gap-5 bg-green-200 text-black  items-center justify-center h-screen w-screen p-8' onSubmit={handleSubmit}>
<h1 className='text-black font-extrabold text-5xl'>MY <span className='text-green-800'>APP</span> </h1>
<div className='flex flex-col bg-green-800 text-white h-max items-center justify-center w-max p-5'>
    <div className='flex gap-5   p-5 items-center justify-center '>
< h2 className=' font-bold text-xl'>Name</h2>
<input type='text' placeholder='Write here' name="username" value={input.username} onChange={handleInput} className='text-black rounded-xl p-1 mt-3'/>
</div>
<div className='flex gap-5  p-5'>
<h2 className=' font-bold text-xl'>Age</h2>

<input type='text' placeholder='Write here' name='age' value={input.age} onChange={handleInput} className=' w-64 text-black rounded-xl p-1'/></div><div className='flex gap-5 p-3 '>
<h2 className=' font-bold text-xl'>Pan CardNo</h2>
<input type='text' placeholder='Write here' name="pan" value={input.pan }onChange={handleInput} className=' w-64 text-black rounded-xl p-1'/></div><div className='flex gap-5 p-3 '>
<h2 className=' font-bold text-xl'>Aadhaar NO</h2>
<input type='text' placeholder='Write here' name="aadhar" value={input.aadhar} onChange={handleInput} className='text-black  rounded-xl p-1'/></div><div className='flex gap-5 items-center justify-center p-5'>
<h2 className=' font-bold text-xl'>Driving License Number</h2>
<input type='text' placeholder='Write here' name="drivinglicense" value={input.drivinglicense}  onChange={handleInput}className='text-black  rounded-xl p-1'/></div><div className='flex gap-5 items-center justify-center p-2'>
<h2 className=' font-bold text-xl'>Passport No</h2>
<input type='text' placeholder='Write here' name="passport" value={input.passport} onChange={handleInput} className='text-black  rounded-xl p-1'/></div>
<div className='flex gap-5 mb-5'>
<button className='p-2 mb-5 bg-white text-black rounded-xl w-34 hover:bg-purple-500 font-bold  ' type="submit" onClick={handleSubmit} >Submit</button>
<button className='p-2 mb-5 bg-green-200 text-black rounded-xl w-34 hover:bg-purple-500 font-bold ' onClick={CaptureImage}>Save</button>
</div>
</div>
    </div>
  )
}

export default Prjt