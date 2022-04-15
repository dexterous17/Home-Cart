import { React, useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery"
import axios from 'axios';
import './SingleProduct.css'
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";


const SingleProduct = () => {

    const [productImage, setproductImage] = useState([])

    useEffect(() => {

        async function fetchData() {

            await axios.get('http://localhost:1337/api/product-2s/1?populate=*')
                .then(res => {
                    res.data.data.attributes.Product_2.data.forEach(element => {
                        setproductImage(arr => [...arr, { original: "http://localhost:1337" + element.attributes.url, thumbnail: "http://localhost:1337" + element.attributes.formats.thumbnail.url }])
                    });
                })

        }
        fetchData()

    }, [])

    return (
        <div className='SingleProduct'>
            <div className='Upper'>

                <div className='side-1'>
                    <ImageGallery items={productImage} thumbnailPosition={'left'} showFullscreenButton={false} />
                </div>
                <div className='side-2'>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='Lower'>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default SingleProduct;