import React from 'react';
import Selectbar from '../Selectbar/Selectbar';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const Mainbar = () => {

    const Button = [
        { 'link': '/', 'text': 'Home' },
        { 'link': '/randomproduct', 'text': 'Random Product' },
        { 'link': '/help', 'text': 'Help' }
    ]

    return (
        <div className='searchbar'>
            <Selectbar />
            <input />
            <Icon icon="ant-design:search-outlined" className='searchicon' />
            <div className='Buttons'>
                {
                    Button.map((data)=>(
                        <div className='Button' key={data.text}>
                        <Link to={data.link}>
                            {data.text}
                        </Link>
                    </div>
                    ))
                }               
            </div>
        </div>
    );
};

export default Mainbar;