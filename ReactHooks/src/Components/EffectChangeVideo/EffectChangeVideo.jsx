import React, { useEffect, useState } from 'react'
import './EffectChangeVideo.css'
import video1 from '../../assets/Foodweb.mp4'
import video2 from '../../assets/Foodweb2.mp4'
import video3 from '../../assets/video1.mp4'


const EffectChangeVideo = () => {

  const Food = [
    video1,
    video2,
    video3
  ];

  const [currVideo, SetCurrVideo] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      SetCurrVideo((prev)=>(prev+1))
    },2000)
  },[currVideo])

  return (
    <div className='ChangeVideo'>
      <div className="Videos">
        <video key={Food[currVideo]} src={Food[currVideo]}
          autoPlay
          loop
          muted
        className='VideosPlay'/>
        
      </div>
      
    </div>
  )
}

export default EffectChangeVideo
