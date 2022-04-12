import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product_button.css'

const Product_button = () => {

    const [button, setButtons] = useState([])

    useEffect(() => {

        async function fetchData() {
            await axios.get('http://localhost:1337/api/buttons-on-main-pages')
                .then(res => {
                    res.data.data.forEach(element => {
                        setButtons(arr => [...arr, element.attributes.ButtonName])
                    });
                })
        }

        fetchData()

    }, [])

    return (
        <div className='Product_2'>
            {
                button.map((button) => (
                    <div key={button}>
                        <a href={"/Products/" + button}>{
                            button
                        }</a>
                    </div>
                ))
            }
        </div>
    );
};

export default Product_button;