import React, { useState } from 'react'
import "../App.css"
// import ThemeToggle from './validate'

const Validate1 = () => {
  const[isDarkMode,setIsDarkMode]=useState(false);

  function ThemeToggle(){
setIsDarkMode(!isDarkMode)
  }
 
  return (
    <div className= {isDarkMode?"dark":"light"} >
      <h1>{isDarkMode?"dark":"light"}</h1>
      <button onClick={ThemeToggle}>{isDarkMode?"lightmode":"darkmode"}</button>
    </div>
  )
}

export default Validate1