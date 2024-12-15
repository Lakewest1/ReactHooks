import {useEffect, useState} from "react"
import './VideoChange.css'
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video4.mp4';
import video3 from '../../assets/video6.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video6.mp4';








const VideoChange = () => {

  
{/*--------Add videos Path-------------------------*/}
const Videos = [
  video1,
  video2,
  video3
  ];
  {/*--------Second  videos Path-------------------------*/ }
  const myVideo = [
    video4,
    video5,
    video2
    
  ];

{/*--------Setting State-------------------------*/}
  const [currentVideo, SetCurrentVideo] = useState(0);

  {/*--------Setting Second State-------------------------*/ }
  const [newVideo, SetNewVideo] = useState(0);

  {/*--------Function for the button-------------------------*/ }
  const changeVideo = () => {
    SetCurrentVideo((prevVideo)=>(prevVideo +1) % Videos.length)
  }
  {/*--------Function for the second button--------------------*/ }
  const changeNow = () => {
    SetNewVideo((prev)=>(prev+1))
  }
  {/* UseEffect for the video */ }
  useEffect(() => {
    setTimeout(() => {
      SetCurrentVideo((prevVideo)=>(prevVideo+1))
    },2000)
  },[currentVideo])


  return (
    <div className="videos">
      <div className="video-content">
        <video
          key={Videos[currentVideo]}
        src={Videos[currentVideo]}
        autoPlay
        loop
        muted
        className="background-video"/>
      </div>
      <button onClick={changeVideo}>Change This video </button>
      <div className="Video2">
        <video key={myVideo[newVideo]}
          src={myVideo[newVideo]}
          autoPlay
          loop
          muted
          className="Bg-videos" />
        <button onClick={changeNow}>Change second</button>
      </div>
      
    </div>
  )
}

export default VideoChange
