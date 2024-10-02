import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../App.css"

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
    <div>
      <h1>Learning Pagination</h1>
      <table className='table'>
        <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>gender</th>
        </tr>
        </thead>
        <tbody>
          {currentItems?.map((value,index)=>(
<tr key={index}>
<td>{value.firstName}</td>
<td>{value.email}</td>
<td>{value.gender}</td>

</tr>
          ))}
        </tbody>
      
      </table>
      <div className='pagination'>
        <button>Prev</button>
        <button>Next</button>
      </div>
      </div>
  )
}

export default Validate1