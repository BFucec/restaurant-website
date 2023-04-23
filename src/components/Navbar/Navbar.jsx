import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


import images from '../../constants/images';

import './Navbar.css';
import '../../index.css';

const  Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
  
        <nav className="app__navbar" id="home">
            <div className="app__navbar-logo">
                <img src={images.taco_name} alt="app logo" />
            </div>
            <div className="div-line-left"/>
            <ul className="app__navbar-links">
                <li className="p__montserrat"><a href="#home">HOME</a></li>
                <li className="p__montserrat"><a href="#gallery">GALLERY</a></li>
                <li className="p__montserrat"><a href="#menu">MENU</a></li>
                <li className="p__montserrat"><a href="#about">ABOUT</a></li>
                <li className="p__montserrat"><a href="#find">DELIVERY</a></li>
            </ul>
            <div className="div-line-right"/>
            <div className="app__navbar-info">
                <p className="p__montserrat"><a href="#about">INFO</a></p>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="black" className="overlay__open" fontSize={27} onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <GiHamburgerMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__montserrat"><a href="#home">HOME</a></li>
                            <li className="p__montserrat"><a href="#gallery">GALLERY</a></li>
                            <li className="p__montserrat"><a href="#menu">MENU</a></li>
                            <li className="p__montserrat"><a href="#about">ABOUT</a></li>
                            <li className="p__montserrat"><a href="#find">DELIVERY</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;