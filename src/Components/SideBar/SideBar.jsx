import React from 'react'
import './SideBar.css'
import home_icon from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import tech from '../../assets/tech.png'
import entertainment from '../../assets/entertainment.png'
import autoMobile from '../../assets/automobiles.png'
import blog from '../../assets/blogs.png'
import sports from '../../assets/sports.png'
import music from '../../assets/music.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameroon from '../../assets/cameron.png'
const SideBar = ({sidebar,category, setCategory}) => {
  
  return (
    <div className={`side-bar ${sidebar?'':'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?`active`:''}`} onClick={()=> setCategory(0)}>
          <img src={home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category===20?`active`:''}`} onClick={()=> setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>gaming</p>
        </div>
        <div className={`side-link ${category===2?`active`:''}`} onClick={()=> setCategory(2)}>
          <img src={autoMobile} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?`active`:''}`} onClick={()=> setCategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?`active`:''}`} onClick={()=> setCategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?`active`:''}`} onClick={()=> setCategory(28)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category===10?`active`:''}`} onClick={()=> setCategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category===22?`active`:''}`} onClick={()=> setCategory(22)}>
          <img src={blog} alt="" />
          <p>Blog</p>
        </div>
        <div className={`side-link ${category===25?`active`:''}`} onClick={()=> setCategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
      </div>
      <div className="subcribed-list">
        <h3>Subcribed</h3>
        <br></br>
        <div className='side-link'>
          <img src={jack}alt="" /> <p>Jack</p>
        </div>
        <div className='side-link'>
          <img src={simon}alt="" /> <p>Simon</p>
        </div>
        <div className='side-link'>
          <img src={tom}alt="" /> <p>Tom</p>
        </div>
        <div className='side-link'>
          <img src={megan}alt="" /> <p>Megan</p>
        </div>
        <div className='side-link'>
          <img src={cameroon}alt="" /> <p>Cameroon</p>
        </div>
      </div>
    </div>
  )
}


export default SideBar
