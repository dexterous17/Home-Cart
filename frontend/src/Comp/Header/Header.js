import React from 'react';
import './Header.css'
import { Icon } from '@iconify/react';
import Mainbar from './Searchbar/MainBar/Mainbar';


const Header = () => {
    return (
        <div className='Header'>
            <div className='homecart'>
                <a href='/'>
                    Home-Cart
                </a>
            </div>
            <div className='header_middle'>
                <Mainbar/>
            </div>
            <div className='SVG'>
                <a href='/login'>
                    <Icon icon="subway:admin" color="white" height="100%" width="44" />
                </a>
                <a href='/wishlist'>
                    <Icon icon="akar-icons:heart" color="white" height="100%" width="44" />
                </a>
                <a href='/cart'>
                    <Icon icon="bi:cart" color="white" height="100%" width="44" href='/cart' />
                </a>
            </div>
        </div>
    );
};

export default Header;