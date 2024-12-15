import React, { useEffect, useState } from 'react'
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video6.mp4';
import video3 from '../../assets/video4.mp4';
import './ProjectFirst.css'

const ProjectFirst = () => {
  const myVideos = [
    video1,
    video2,
    video3
  ];
  
  const name = [{
    name1: 'I love it',
    name2: 'You love it',
    name3: 'We love it'
  }];
  const [currVideo, SetCurrVideo] = useState(0);
  const [currname, setName] = useState('I love it');

  useEffect(() => {
    setTimeout(() => {
      SetCurrVideo((prev)=>(prev+1))
    },3000)
  },[currVideo,currname])


  return (
    <div>
      <h2>Change the video by yourself.I love it{name[currname]}</h2>
      <div className="video">
        <video
          key={myVideos[currVideo]}
          src={myVideos[currVideo]}
          autoPlay
          loop
          muted
        className='VideoChange'/>
      </div>

      
    </div>
  )
}

export default ProjectFirst
