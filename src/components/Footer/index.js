"use client"
import React, { useState } from 'react'

const Footer = () => {
    const[counter,setCounter]=useState(0)
  return (
    <div className=' bg-gray-400 '>
        <div className='flex gap-4 justify-between p-2 w-[80%] mx-auto'>
    <div >
      &copy;  copy right 
    </div>
        <div className='flex gap-2'>
            <button className="p-2 bg-red-100 hover:bg-red-600 transtion" onClick={()=>setCounter(counter+1)}>Like </button>
            <p>{counter}</p>
        </div>

        </div>
        </div>
  )
}

export default Footer