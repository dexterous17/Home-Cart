import React from 'react';
import './Home.css'
import HomeButton from './HomeButton';
import HomeProduct from './HomeProduct';
const Product = () => {
    return (
        <main>
            <div className='Carsole'>

            </div>
            <div className='lower_main'>
                <HomeButton/>
                <HomeProduct/>
            </div>
        </main>
    );
};

export default Product;