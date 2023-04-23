import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  
    <div className="app__aboutUs" id="about">
        <div className="app__aboutUs-history">
            <h1 className="app__aboutUs-headtext">Our History</h1>
            <p className="app__aboutUs-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur ullamcorper diam et ornare. Praesent id bibendum odio. Donec vitae turpis convallis, mattis nibh vitae, ultricies ipsum. In mauris metus, varius at mollis sed, pulvinar in ligula. Curabitur augue ex, vehicula sit amet porttitor a, mattis et felis. Pellentesque in auctor justo. Nulla condimentum ligula id eros elementum dignissim. Aliquam eu diam tortor. Donec id scelerisque quam. Donec at magna vitae lorem vulputate pretium non a dui. Quisque pharetra pretium erat, eu accumsan justo fringilla quis. Aliquam at vestibulum lacus. Curabitur euismod lorem in ex malesuada aliquet. Sed nec sollicitudin eros.</p>
        </div>

        <div className="app__aboutUs-chefs">
            <div className="app__aboutUs-chefs-content">
                <h1 className="app__aboutUs-headtext">Our Chefs</h1>
                <p className="app__aboutUs-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur ullamcorper diam et ornare. Praesent id bibendum odio. Donec vitae turpis convallis, mattis nibh vitae, ultricies ipsum. In mauris metus, varius at mollis sed, pulvinar in ligula. Curabitur augue ex, vehicula sit amet porttitor a, mattis et felis. Pellentesque in auctor justo. Nulla condimentum ligula id eros elementum dignissim. Aliquam eu diam tortor. Donec id scelerisque quam. Donec at magna vitae lorem vulputate pretium non a dui. Quisque pharetra pretium erat, eu accumsan justo fringilla quis. Aliquam at vestibulum lacus. Curabitur euismod lorem in ex malesuada aliquet. Sed nec sollicitudin eros.</p>
            </div>
            <div className="app__aboutUs-chefs-images">
                <div className="app__aboutUs-chefs-imageCard flex__center">
                    <img src={images.chef1} className="app__aboutUs_chefImage" alt="chef-img"/>
                    <p className="app__aboutUs-chefs-chefName">Chef Steve Rogers</p>
                </div>
                <div className="app__aboutUs-chefs-imageCard flex__center">
                    <img src={images.chef2} className="app__aboutUs_chefImage" alt="chef-img"/>
                    <p className="app__aboutUs-chefs-chefName">Chef Maria Hill</p>
                </div>
                <div className="app__aboutUs-chefs-imageCard flex__center">
                    <img src={images.chef3} className="app__aboutUs_chefImage" alt="chef-img"/>
                    <p className="app__aboutUs-chefs-chefName">Chef Sam Wilson</p>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;