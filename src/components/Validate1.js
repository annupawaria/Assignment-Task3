// import { useState } from "react"
import React,{useState} from 'react'





const Validate1 = () => {
    const[email,setEmail]=useState("")
const[errorMessage,setErrorMessage]=useState("")


    const changeHandler=(e)=>{
        const value=e.target.value
        setEmail(value)
if(!value.includes("@")|| value.includes(".")){
    setErrorMessage
}


    
    }


  return (
    <div>
        <form>
            <label>
                Email:<input type='Email' placeholder='write your email' value={email}
                onChange={changeHandler}/>
            </label>
            {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
        </form>
    </div>
  )
}

export default Validate1