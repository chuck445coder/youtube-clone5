import React from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'


import { useState } from 'react'
import { useEffect } from 'react'
const Feed = ({category, setCategory}) => {
  const [data, setData] = useState([])
  const fetchData = async function() {
    const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=AIzaSyD_3mrdzfWfdW5rDtmeaelaTnjworKfcZ0`

    await fetch(videoList_URL).then(res => res.json()).then(data => setData(data.items))
    console.log(data)
  }
  
  useEffect(()=> {
    fetchData()
  },[category])

  return (
    <div className='feed'>
      {data.map((item,index) => {
        return(
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
              <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{(item.statistics.viewCount)} views &bull; {item.snippet.publishedAt} </p>    
            </Link>
        )
      }) }      
    </div>    
  )
}

export default Feed
