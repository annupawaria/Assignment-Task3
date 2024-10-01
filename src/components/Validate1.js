import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Validate1 = () => {
  const[tableData,setTableData]=useState("")
  const[currentPage,setCurrentPage]=useState(1)
  const[rowsPerPage,setRowsPerPage]=useState(10)
  const indexOfLastItem=currentPage*rowsPerPage;
  const indexOfFirstItem=indexOfLastItem-rowsPerPage;
  const currentItems=tableData?.users?.slice(indexOfFirstItem,indexOfLastItem)
  const totalPages=Math.ceil(tableData?.total/rowsPerPage)

  useEffect(()=>{
    axios.get("https://dummyjson.com/users?limit=0").then((response)=>{
console.log(response)
setTableData(response?.data)
    })
  },[])
  return (
    <div>pagination</div>
  )
}

export default Validate1