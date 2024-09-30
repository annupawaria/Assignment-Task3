import React, { useEffect, useState } from 'react'

const Validate1 = () => {

  const [currentTime,setCurrentTime]=useState(new Date())
useEffect(()=>{
  const timer=setInterval(()=>{
    setCurrentTime(new Date())
  },1000)
  return () => clearInterval(timer);
},[])

  return (
    <div>
<p>real ttime and dare</p>
<h1>{currentTime.toLocaleDateString()}{currentTime.toLocaleTimeString()}</h1>

      
    </div>
  )
}

export default Validate1