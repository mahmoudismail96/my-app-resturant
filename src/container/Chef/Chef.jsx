import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div id='chef' className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="img for chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
    
        <div className='app__chef-content'>
           <div className='app__chef-content-quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur  elit. Illo Lorem ipsum dolor sit amet, consectetur  elit. Illo
            </p>
           </div>
           <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos architecto officiis minima nam odit ipsam ea provident illo assumenda?</p>
        </div> 
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & founder</p>
          <img src={images.sign} alt='chef sign'/>
        </div>  
    </div>
  </div>
);

export default Chef;
