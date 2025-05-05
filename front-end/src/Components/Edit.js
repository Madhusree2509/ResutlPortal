import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Edit = () => {
  let obj = useContext(Ct)
  let [data,setData] = useState({...obj.store.std})
  let navigate = useNavigate()
  let upddet = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let upd = () =>{
    axios.put("http://localhost:5000/upd",data,{"headers":{"Authorization":obj.store.token}}).then((res)=>{
      navigate("/display")
    })
  }
  return (
    <div>
      <div className='fcon'>
        <input type="text" value={data._id} readOnly/>
        <input type="text" placeholder='Enter Name' value={data.name} name="name" onChange={upddet}/>
        <input type="text" placeholder='Enter phone number' value={data.phone} name="phone" onChange={upddet}/>
        <input type="text" placeholder='Enter Email' value={data.email} name="email" onChange={upddet}/>
        <input type="date" value={data.dob.slice(0,10)} name="dob" onChange={upddet}/>
        <div>
            <input type="radio" value="male" name="gen" onChange={upddet} checked={data.gen == "male"}/>Male
            <input type="radio" value="female" name="gen"  onChange={upddet} checked={data.gen=="female"} />Female
        </div>
        <input type="text" placeholder='Enter Telugu marks' value={data.tel} name="tel" onChange={upddet}/>
        <input type="text" placeholder='Enter Hindi Marks' value={data.hindi} name="hindi" onChange={upddet}/>
        <input type="text" placeholder='Enter English Marks' value={data.eng} name="eng" onChange={upddet}/>
        <input type="text" placeholder='Enter Maths Marks' value={data.Maths} name="Maths" onChange={upddet}/>
        <input type="text" placeholder='Enter Science Marks' value={data.science} name="science" onChange={upddet}/>
        <input type="text" placeholder='Enter Social Marks' value={data.social} name="social" onChange={upddet}/>
        <button onClick={upd}>Update</button>
      </div>
    </div>
  )
}

export default Edit
