import React from 'react';

const Selectbar = () => {

    const options = ['All catrgoery','Appliances','Baby','Clothing','Electronics','Gifts & Holidays','Health','Home','Pets']

    return (
        <select>
           {
               options.map(option=>(
                   <option key={option}>
                       {option}
                   </option>
               ))
           }
        </select>
    );
};

export default Selectbar;