import React from 'react';
import Selectbar from '../Selectbar/Selectbar';
import { Icon } from '@iconify/react';

const Mainbar = () => {
    return (
        <div className='searchbar'>
            <Selectbar />
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
                    <a href='/help'>
                        Help
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Mainbar;