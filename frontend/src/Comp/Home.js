import React from 'react';
import './Home.css'
import HomeButton from './HomeButton';
import HomeProduct from './HomeProduct';
import CarouselMain from './MainProduct/Carousel/Carousel';
const Product = () => {
    return (
        <main>
            <CarouselMain />
            <HomeButton />
            <HomeProduct />
        </main>
    );
};

export default Product;