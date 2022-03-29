import React from 'react';
import './Header.css'
import { Icon } from '@iconify/react';
import Selectbar from './Searchbar/Selectbar/Selectbar';

const Header = () => {
    return (
        <div className='Header'>
            <div className='homecart'>
                <a href='/'>
                    Home-Cart
                </a>
            </div>
            <div className='header_middle'>
                <div className='searchbar'>
                    <Selectbar/>
                    <input />
                    <Icon icon="ant-design:search-outlined" className='searchicon' />
                    <div className='Buttons'>
                        <div className='Button'>
                            <a href='/'>
                                Home
                            </a>
                        </div>
                        <div className='Button'>
                            <a href='/randomproduct'>
                                Random Product
                            </a>
                        </div>
                        <div className='Button'>
                            <a href='/Help'>
                                Help
                            </a>
                        </div>
                    </div>
                </div>
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