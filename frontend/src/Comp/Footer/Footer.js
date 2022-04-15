import React from 'react';
import './Footer.css'

const Footer = () => {
    const footer_text = [{ text: "Condition of use" }, { text: "Privacy Notice" }, { text: "Interest-Based Ads" }, { text: "© 1996-2022, Home-cart.com, Inc. or its affiliates" }]

    return (
        <div className='Footer'>
            {
                footer_text.map((data) => (
                    <div className='Footer_Text' key={data.text}>
                        {data.text}
                    </div>
                ))
            }
        </div>
    );
};

export default Footer;