import React from "react";
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'



const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
          <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
          <h3>Best Youtube Channel To Lear Web  </h3>
        <div className="play-video-info">
          <p>100N Luot xem 2 ngay truoc</p>
        <div/>
          <div>
              <span><img src={like}></img>100</span>
              <span><img src={dislike}></img>5</span>
              <span><img src={share}></img>Chia Se</span>
              <span><img src={save}></img>Luu</span>
          </div>
        </div>
    </div>

  )
}

export default PlayVideo
