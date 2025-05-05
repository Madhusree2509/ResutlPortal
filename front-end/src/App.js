import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Reg from "./Components/Reg"
import Login from "./Components/Login"
import Lagout from "./Components/Lagout"
import Gethal from "./Components/Gethal"
import Disp from "./Components/Disp"
import Edit from "./Components/Edit"
import "./App.css"
import Ct from "./Components/Ct"
import { useState } from "react"

const App = () => {
  let [store,setStore] = useState({"token":"","name":""})
  let updstore = (obj) =>{
    setStore({...store,...obj})
  }
  let student = {"store":store,"updstore":updstore}
  return (
    <div>
      <BrowserRouter>
        <Ct.Provider value={student}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/reg" element={<Reg />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Lagout />}/>
            <Route path="/gethal" element={<Gethal />}/>
            <Route path="/display" element={<Disp />}/>
            <Route path="/edit" element={<Edit />}/>
          </Routes>
        </Ct.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
