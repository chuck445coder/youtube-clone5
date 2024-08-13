import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import {Link} from 'react-router-dom'
import notification_icon from "../../assets/notification.png"
import { useState } from 'react'

const Navbar = ({setSidebar}) => {
  const [search, setSearch] = useState('')
  
  const handleInput = (event) => {
    if (event.target.value!=='') {
      
      setSearch(event.target.value)
    }
  }
  return (
    <nav className='flex-div'>
      <div className='nav left flex-div'>
        <img className='menu' src={menu_icon} onClick={() => setSidebar(prev => prev===false?true:false)}></img>
        <Link to={`/`}><img className='logo' src={logo}></img></Link>
      </div>
      <div className='nav mid flex-div'>
        <div className="search-box">
          <input className='searchBox' type='text' placeholder='search' onChange={handleInput}></input>
          
          <Link to={'/SearchPage'} state={{ search: `${search}` }} ><img className='searchBtn' src={search_icon}  ></img></Link>
          
        </div>
      </div>
    <div className='nav right flex-div'>
      <img className='upload_icon' src={upload_icon}></img>
      <img className='notification_icon' src={notification_icon}></img>
    </div>
    </nav>
    
  )
}

export default Navbar
