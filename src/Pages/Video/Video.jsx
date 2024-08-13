import React from 'react'
import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import './Video.css'

const Video = () => {
  const {videoId, categoryId} = useParams()
  return (
    <div className='video'>
      <PlayVideo videoId={videoId} />
      {console.log(videoId)}
    </div>
  )
}

export default Video
