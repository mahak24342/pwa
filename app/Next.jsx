import React, { useContext } from 'react'
import { Context } from './New'

const Next = () => {
    const {ad}=useContext(Context);
    return (
   
    <div>

        {ad?.map(({code,symbol,rate})=>(
           <>
           <div>{code}</div>
            <h2>{symbol}</h2>
            <h2>{rate}</h2>
       </>
       ))}
    </div>
  )
}

export default Next