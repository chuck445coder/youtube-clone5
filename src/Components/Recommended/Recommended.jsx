import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Recommended = () => {
  
  
  return (
    <div className='recommended'>
      <div className="side-video-list">
      
        <img src={thumbnail1}></img>
        <div className="video-info">
            <h4>Best channel to learn react</h4>
            <p>Taimodel</p>
            <p>200N luot xem</p>
        </div>
      </div>
    </div>
  )
}

export default Recommended
