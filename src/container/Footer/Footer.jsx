import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {images} from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h2 className='app__footer-headtext'>Contact Us</h2>
        <p className='p__opensans'>0 w 53rd st New York NY 120555 , USA</p>
        <p className='p__opensans'>+1 234-567-89</p>
        <p className='p__opensans'>+1 234-567-89</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo img'/>
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt='spoon img' className='spoon__img' style={{marginTop: 15}}/>
        
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h2 className='app__footer-headtext'>Working Hours</h2>
        <p className='p__opensans'>Manday-Friday</p>
        <p className='p__opensans'>08:00am - 12:00am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>07:00am - 11:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
