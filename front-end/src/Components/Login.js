import React, { useContext, useState } from 'react'
import axios from "axios"
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let obj = useContext(Ct)
  let navigate = useNavigate()
  let [data,setData] = useState({"_id":"","password":""})
  let getdet = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let login = () =>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
     if("msg" in res.data){
      alert(res.data.msg)
     }else{
      alert("Login Successful")
      obj.updstore(res.data)
      navigate("/display")
     }
    })
  }
  return (
    <div className='con'>
      <div className='logincon'>
        <input type="text"  placeholder='Enter ID' onChange={getdet} value={data._id} name="_id"/>
        <input type="password" placeholder='Enter Password' onChange={getdet} name="password" value={data.password}/>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login
