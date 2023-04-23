import React from 'react';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  
    <div className="app__footer">
        <div className="app__footer-head">
            
            <div className="app__footer-head-text">
                <h1 className="app__footer-head-line">Bon Appétit</h1>
            </div>
            <div className="app__footer-head-logo">
                <img src={images.taco_name} alt="taco-logo"></img>
            </div>
        </div>
    </div>

);

export default Footer;