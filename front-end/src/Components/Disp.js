import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Disp = () => {
  let [data,setData] = useState([])
  let [f,setF] = useState(false)
  let obj = useContext(Ct)
  let navigate = useNavigate()
  let upd = (std) =>{
    obj.updstore(std)
    navigate("/edit")
  }
  useEffect(()=>{
    axios.get("http://localhost:5000/all",{"headers":{"Authorization":obj.store.token}}).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[f])
  let del = (hno) =>{
    axios.delete(`http://localhost:5000/del/${hno}`,{"headers":{"Authorization":obj.store.token}}).then((res)=>{
      alert("Deletion Done")
      setF(!f)
    })
  }
  return (
    <div className='disp'>
      {data.length > 0 && <table>
        <tr><th>Sno</th><th>Hallticket</th><th>Name</th><th>Date of Birth</th><th>Gender</th><th>Email</th><th>Phone</th><th>Telugu</th><th>Hindi</th><th>English</th><th>Maths</th><th>Science</th><th>Social</th></tr>
        {
          data.map((std,ind)=>{
            return(<tr>
              <td>{ind+1}</td>
              <td>{std._id}</td>
              <td>{std.name}</td>
              <td>{std.dob.slice(0,10)}</td>
              <td>{std.gen}</td>
              <td>{std.email}</td>
              <td>{std.phone}</td>
              <td>{std.tel}</td>
              <td>{std.hindi}</td>
              <td>{std.eng}</td>
              <td>{std.Maths}</td>
              <td>{std.science}</td>
              <td>{std.social}</td>
              <td><button onClick={()=>upd({"std":std})}>Edit</button></td>
              <td><button onClick={()=>del(std._id)}>Delete</button></td>
            </tr>)
          })
        }  
      </table>}
    </div>
  )
}

export default Disp
