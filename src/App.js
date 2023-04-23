import React from 'react';

import { AboutUs, Gallery, FindUs, Footer, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <Gallery />
        <Menu />
        <AboutUs />
        <FindUs />
        <Footer />
    </div>
  )
}

export default App;