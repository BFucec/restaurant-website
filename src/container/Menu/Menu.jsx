import React from 'react';

import { MenuItem } from '../../components';
import { data } from '../../constants';

import './Menu.css';

const Menu = () => (
  
    <div className="app__menu section__padding" id="menu">
        <div className="app__menu-title">
            <h1 className="app__menu-headtext" >Our Menu</h1>
            <p className="app__menu-textcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur ullamcorper diam et ornare. Praesent id bibendum odio. Donec vitae turpis convallis, mattis nibh vitae, ultricies ipsum. In mauris metus, varius at mollis sed, pulvinar in ligula.</p>
        </div>

        <div className="app__menu-menu">
            <div className="app__menu-menu_left">
                <p className="app__menu-menu-fnd">Food</p>
                <div className="app__menu-menu_items">
                    {data.menu.map((food, index) => (
                        <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags}/>
                    ))}
                </div>
            </div>
            <div className="app__menu-menu-divider"></div>
            <div className="app__menu-menu_right">
                <p className="app__menu-menu-fnd">Beverages</p>
                <div className="app__menu-menu_items">
                    {data.drinks.map((drink, index) => (
                        <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags}/>
                    ))}
                </div>
            </div>
             
        </div>
    </div>

);

export default Menu;