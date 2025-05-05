import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj = useContext(Ct)
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reg">Std-Register</Link>
      {obj.store.token == "" && <Link to="/login">Login</Link> }
      {obj.store.token != "" &&<Link to="/display">Disp</Link>}
      <Link to="/gethal">Print Hall</Link>
      {obj.store.token != "" &&<Link to="/logout">Logout</Link>}
      {obj.store.token != "" && <div>{obj.store.name}</div>}
    </nav>
  )
}

export default Nav
