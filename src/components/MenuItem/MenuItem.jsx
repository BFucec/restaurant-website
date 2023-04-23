import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags}) => (
  
    <div className="app__menuItem">
        <div className="app__menuItem-head">
            <div className="app__menuItem-name">
                <p className="p__montserrat">{title}</p>
            </div>
            <div className="app__menuItem-divider" />
            <div className="app__menuItem-price">
                <p className="p__price">{price}</p>
            </div>
        </div>
        <div className="app__menuItem-sub">
            <p className="p__tag">{tags}</p>
        </div>
    </div>
);

export default MenuItem;