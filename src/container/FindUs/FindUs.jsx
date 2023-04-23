import React from 'react';

import './FindUs.css';

const FindUs = () => (
    <div className="app__findUs" id="find">
        <div className="app__findUs-location">
            <h1 className="app__findUs-headtext">Find Us</h1>
            <p className="app__findUs-content">2207 Elliot Avenue</p>
            <p className="app__findUs-content">Seattle, Washington</p>
            <p className="app__findUs-content">98115</p>
        </div>

        <div className="app__findUs-divider">
    
        </div>

        <div className="app__findUs-hours">
            <h1 className="app__findUs-headtext">Working Hours</h1>
            <div className="app__hours">
                <p className="app__findUs-content">Mon - Fri:&nbsp;&nbsp;&nbsp;10AM - 10PM</p>
                <p className="app__findUs-content">Sat:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 12PM</p>
                <p className="app__findUs-content">Sun:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4PM - 10PM</p>
            </div>   
        </div>

        <div className="app__findUs-divider">
          
        </div>

        <div className="app__findUs-contact">
            <h1 className="app__findUs-headtext">Contact</h1>
            <p className="app__findUs-content">206-523-1259</p>
            <p className="app__findUs-content">206-609-1223</p>          
        </div>

    </div>

);

export default FindUs;