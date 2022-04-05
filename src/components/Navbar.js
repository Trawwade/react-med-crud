import React from 'react'
import {useState } from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
    const [activeTab, setActiveTab]=useState("/")
    return (
      
    <div>
        <h1>
            patients
        </h1>
        <ul>
            <li
            >
            <Link to={"/"} onClick={()=>setActiveTab("home")}>home</Link>
            </li>
            <li>
                <Link to={"./newdata"} onClick={()=>setActiveTab("add")}>add patient</Link>
            </li>
            <li>
                <Link to={"./edit"} onClick={()=>setActiveTab("edit")}> edit</Link>
            </li>

        </ul>
    </div>
  )
}

export default Navbar