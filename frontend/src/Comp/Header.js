import React from 'react';
import './Header.css'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className='Header'>
            <div className='homecart'>
                Home-Cart
            </div>
            <div className='header_middle'>
                <div className='Button'>
                    Home
                </div>
                <div className='Button'>
                    Product
                </div>
                <div className='Button'>
                    Help
                </div>
                <div className='Button'>
                    Contact
                </div>
                <div className='searchbar'>
                    <select>
                        <option>
                            All catrgoery
                        </option>
                        <option>
                            Appliances
                        </option>
                        <option>
                            Baby
                        </option>
                        <option>
                            Clothing
                        </option>
                        <option>
                            Electronics
                        </option>
                        <option>
                            Gifts & Holidays
                        </option>
                        <option>
                            Health
                        </option>
                        <option>
                            Home
                        </option>
                        <option>
                            Pets
                        </option>
                    </select>
                    <input />
                    <Icon icon="ant-design:search-outlined" className='searchicon' />
                </div>
            </div>
            <div className=''>
                <Icon icon="subway:admin" color="white" height="100%" width="40" />
                <Icon icon="akar-icons:heart" color="white" height="100%" width="40" />
                <Icon icon="bi:cart" color="white" height="100%" width="40" />
            </div>
        </div>
    );
};

export default Header;