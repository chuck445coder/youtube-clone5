import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar.jsx'
import Feed from '../../Components/Feed/Feed.jsx'
import { useState } from 'react'
const Home = ({sidebar}) => {
  const [category, setCategory] = useState(0)
  return (
    <div>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory}></SideBar>
      <div className={`container ${sidebar?'':'large-container'}`}>
        <Feed category={category} setCategory={setCategory} />
      </div>
    </div>
  )
}

export default Home
