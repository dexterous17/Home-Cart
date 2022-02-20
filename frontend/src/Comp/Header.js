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
                    
                    <div className='searchbar'>
                        <input/>
                        <Icon icon="ant-design:search-outlined" className='searchicon'/>
                    </div>
                    <div>
                        <div>
                            Hello, Sign in
                        </div>
                        <div>
                            Account & list
                        </div>
                    </div>
                    <div>
                        <div>
                            Returns
                        </div>
                        <div>
                            & Orders
                        </div>
                    </div>
                </div>
                <Icon icon="bi:cart" color="white" height="38" width="40"/>
        </div>
    );
};

export default Header;