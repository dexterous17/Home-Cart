import React from 'react';
import './Product.css'
import Product_button from './Product_button';
import Product_1 from './Product_1';
const Product = () => {
    return (
        <main>
            <div className='Carsole'>

            </div>
            <div className='lower_main'>
                <Product_button />
                <Product_1 />
            </div>
        </main>
    );
};

export default Product;