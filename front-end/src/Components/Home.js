import React, { useState } from 'react'
import axios from "axios"

const Home = () => {
    let [hall,setHall]=useState("")
    let [data,setData]=useState(null)
    let gethal = (e) =>{
        setHall(e.target.value)
    }
    let getres = () =>{
        axios.get(`http://localhost:5000/get/${hall}`).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
  return (
    <div className='con'>
      <div className='homeinputs'>
        <input type="text" placeholder='Enter Hall Ticket Number' onChange={gethal} value={hall}/>
        <button onClick={getres}>Get Results</button>
      </div>
      { data != null && data.length != 0  && <table border="1">
        <tr><th>Photo</th><td><img src={`http://localhost:5000/pic/${data.photo}`}/></td></tr>
        <tr><th>Hall Ticket:</th><td>{data._id}</td></tr>
        <tr><th>Name:</th><td>{data.name}</td></tr>
        <tr><th>Gender:</th><td>{data.gen}</td></tr>
        <tr><th>Date of Birth:</th><td>{data.dob.slice(0,10)}</td></tr>
        <tr><th colSpan={2}>Marks Details</th></tr>
        <tr><th>Telugu:</th><td>{data.tel}</td></tr>
        <tr><th>Hindi:</th><td>{data.hindi}</td></tr>
        <tr><th>English:</th><td>{data.eng}</td></tr>
        <tr><th>Maths:</th><td>{data.Maths}</td></tr>
        <tr><th>Science:</th><td>{data.science}</td></tr>
        <tr><th>Social:</th><td>{data.social}</td></tr>
        <tr><th>Total Marks:</th><td>{parseInt(data.tel)+parseInt(data.hindi)+parseInt(data.eng)+parseInt(data.Maths)+parseInt(data.science)+parseInt(data.social)}</td></tr>
      </table>}
    </div>
  )
}

export default Home
