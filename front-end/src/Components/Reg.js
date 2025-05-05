import React, { useState } from 'react'
import axios from "axios"

const Reg = () => {
    let [data,setData] = useState({"name":"","dob":"","email":"","phone":"","photo":"","gen":""})
    let [msg,setMsg] = useState("")
    let getdet = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let getdet1 = (e) =>{
        setData({...data,"photo":e.target.files[0]})
        console.log(data);
        
        
    }
    let reg = () =>{
        console.log("reg")
        let fd = new FormData()
        for(let p in data){
            fd.append(p,data[p])
        }
        axios.post("http://localhost:5000/add",fd).then((res)=>{
            if("msg" in res.data){
                setMsg(res.data.msg)
                setData({"name":"","dob":"","email":"","phone":"","photo":"","gen":""})
                alert("Registration Successful")
            }else{
                console.log(res.err.message)
                setMsg(res.err)
                alert("Registration Failure Try again...")
            }
        }).catch((err)=>{
            setMsg("Error in Adding")
        })
    }
  return (
    <div className='con'>
      <div className='fcon'>
        <input type="text" placeholder='Enter Name' value={data.name} name="name" onChange={getdet}/>
        <input type="text" placeholder='Enter phone number' value={data.phone} name="phone" onChange={getdet}/>
        <input type="text" placeholder='Enter Email' value={data.email} name="email" onChange={getdet}/>
        <input type="date" value={data.dob} name="dob" onChange={getdet}/>
        <div>
            <input type="radio" value="male" name="gen" onChange={getdet} checked={data.gen == "male"}/>Male
            <input type="radio" value="female" name="gen"  onChange={getdet} checked={data.gen=="female"} />Female
        </div>
        <input type='file' name="photo" onChange={getdet1}/>
        <button onClick={reg}>Register</button>
      </div>
    </div>
  )
}

export default Reg
