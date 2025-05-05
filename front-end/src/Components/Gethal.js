import React, { useState } from 'react'
import axios from "axios"

const Gethal = () => {
  let [opt,setOpt] = useState("")
  let [val,setVal] = useState("")
  let [data,setData] = useState("")
  let getdet1 = (e) =>{
    setOpt(e.target.value)
  }
  let getdet2 = (e) =>{
    setVal(e.target.value)
  }
  let gethal = () =>{
    axios.get(`http://localhost:5000/gethal/${opt}/${val}`).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    
  }
  return (
    <div className='con'>
      <div className='halcon'>
        <div>
          <input type="radio" name="opt" value="phone" onChange={getdet1} />Phone
          <input type="radio" name="opt" value="email" onChange={getdet1} /> Email 
        </div>
        <input type="text" name="val" placeholder='Enter Data' onChange={getdet2} />
        <button onClick={gethal}>Get HallTicket</button>
      </div>

      <div className='haldata'>
        {data.length > 0 && <table>
          <tr><th>HallTicket Number</th><td>{data[0]._id}</td></tr>
          <tr><th>Name</th><td>{data[0].name}</td></tr>
          <tr><th>Email</th><td>{data[0].email}</td></tr>
          <tr><th>phone</th><td>{data[0].phone}</td></tr>
          <tr><th>Gender</th><td>{data[0].gen}</td></tr>
          <tr><th>Date of Birth</th><td>{data[0].dob.slice(0,10)}</td></tr>
        </table>}
      </div>
    </div>
  )
}

export default Gethal
