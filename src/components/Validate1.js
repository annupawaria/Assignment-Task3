import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Validate1 = () => {
  const[tableData,setTableData]=useState("")
  useEffect(()=>{
    axios.get("https://dummyjson.com/users?limit=0").then((response)=>{
console.log(response)
    })
  },[])
  return (
    <div>pagination</div>
  )
}

export default Validate1