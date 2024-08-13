import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchPage.css'
import SideBar from '../../Components/SideBar/SideBar'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'
const Search = () => {
  const location = useLocation()
  const  {search}  = location.state

  const [searchData, setSearchData] = useState([])
  const fetchData = async function() {
    const videoList_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=AIzaSyD_3mrdzfWfdW5rDtmeaelaTnjworKfcZ0`

    await fetch(videoList_URL).then(res => res.json()).then(data => setSearchData(data.items))
   
  }
  
  useEffect(()=> {
    fetchData()
     console.log(searchData)
  },[search])
  

  return (
    
    <div className='video-search-list'>
      { searchData.map ((item, index) => {
      return (
        <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id.videoId}`}>
          
            <div className='video'>
              <img src={item.snippet.thumbnails.medium.url} ></img>
              <div className="video-info">
                <h2>{item.snippet.title}</h2>
                <h3>500k luot xem &bull; 3 ngay truoc</h3>
              </div>
            </div>
        </Link>
      )
    })}
    </div>
  )
}

export default Search
