import { React, useEffect, useState } from 'react';
import axios from 'axios'
import ImageGallery from "react-image-gallery"
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";


const CarouselMain = () => {
    const [url, setUrl] = useState([])

    useEffect(() => {

        async function fetchData() {

            await axios.get('http://localhost:1337/api/product-2s/1?populate=*')
                .then(res => {
                    res.data.data.attributes.Product_2.data.forEach(element => {
                        setUrl(arr => [...arr, { original: "http://localhost:1337" + element.attributes.url, thumbnail: "http://localhost:1337" + element.attributes.formats.thumbnail.url }])
                    });
                })

        }
        fetchData()

    }, [])

    return (
        <div className='home_carousel'>
            <ImageGallery items={url} showFullscreenButton={false} showThumbnails={false} showPlayButton={false}/>
        </div>
    );
};

export default CarouselMain;