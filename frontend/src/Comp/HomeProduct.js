import React, { useEffect, useState } from 'react';
import './HomeProduct.css'
import axios from 'axios';

const Product_1 = () => {

    const [Product, setProduct] = useState([])

    useEffect(() => {

        async function fetchData() {
            
            await axios.get('http://localhost:1337/api/product-2s/1?populate=*')
                .then(res => {
                
                    res.data.data.attributes.Product_2.data.forEach(element => {
                        
                        setProduct(arr => [...arr,element.attributes.url])
                    
                    });
                
                })
        }

        fetchData()

    }, [])

    return (
        <div className='Product_1'>
            {
                Product.map(data=>(
                    <div key={data}>
                        <img src={'http://localhost:1337'+data} alt={data}/>
                    </div>
                ))
            }    
        </div>
    );
};

export default Product_1;