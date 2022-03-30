import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css';

const CarouselMain = () => {
    const [url, seturl] = useState([])

    useEffect(() => {

        async function fetchData() {
            await axios.get('http://localhost:1337/api/carousels/4?populate=*')
                .then(res => {
                    res.data.data.attributes.Banner.data.forEach(element => {
                        seturl(arr => [...arr, element.attributes.url])
                    });
                })
        }

        fetchData()

    }, [])

    return (
        <Carousel autoPlay showThumbs={false} showArrows>
            {
                url.map((url) => (
                    <div key={url}>
                        <img src={"http://localhost:1337" + url} alt={url} height="300px"/>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default CarouselMain;