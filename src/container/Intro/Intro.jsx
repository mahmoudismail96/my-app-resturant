import React,{useState, useRef} from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import './Intro.css';
import {meal} from '../../constants';

const Intro = () => {
  const [PlayVideo, staPlayVideo] = useState(false)
  const vidRef = useRef()
  const handleVideo = () => {
    staPlayVideo((prevPlayVideo) => !prevPlayVideo );
    if(PlayVideo) {
      vidRef.current.pause();
    }else {
      vidRef.current.play ();
    }
  }
  return (
    <div className='app__video'>
    <video src={meal}
    type='video/mp4'
    loop
    controls={false}
    muted
    ref={vidRef}
    />
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
         {PlayVideo 
         ? (
         <BsPauseFill color="#fff" fontSize={30}/> 
         ) : <BsFillPlayFill color="#fff" fontSize={30}/>}
      </div>
    </div>
  </div>
  )
  
};

export default Intro;
