import React, {useRef} from 'react';
import {SubHeading} from '../../components';
import { images} from '../../constants';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import './Gallery.css';
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
const Gallery = () => {
const scrollRef = useRef(null)
const scroll = (direction) => {
  const {current} = scrollRef;
  if(direction === 'left'){
    current.scrollLeft -=300;
  }else {
    current.scrollLeft +=300;
  }
}
  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Instagram"/>
      <h2 className='headtext__cormorant'>Photo Gallery</h2>
      <p className='p__opensans' style={{color: "#AAA", marginTop: "2rem"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minima mollitia voluptas voluptates ut corporis sapiente repellendus fugiat quisquam dolore!
      </p>
      <button type='button' className='custom__button'>View More</button>
    </div>


    <div className='app__gallery-imagrs'>
      <div className='app__gallery-imagrs_container' ref={scrollRef}>
           { galleryImages.map((image, index) =>(
            <div className='app__gallery-imagrs_card flex__center' key={`gallery_image-${index + 1}`}>
                 <img src={image} alt="gallery"/>
                 <BsInstagram className='gallery__image-icon'/>
            </div>
           ))}
      </div>
      <div className='app__gallery-imagrs_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icons' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icons' onClick={() => scroll('right')}/>
          
      </div>
    </div>

  </div>
);
}
export default Gallery;
