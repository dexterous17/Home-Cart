import React from 'react';
import Expandble from '../../Comp/Expandble/Expandble';
import "./Help.css"

const Help = () => {



    return (
        <main className='Help_main'>
            <div className='Help_box'>
                <Expandble name={'Managing your Account'}>
                    LOL<br />
                    LOL<br />
                    LOL<br />
                </Expandble>
                <Expandble name={'How to cancle Order'}>
                    LOL<br />
                    LOL<br />
                    LOL<br />
                </Expandble>
                <Expandble name={'Deleting the Account'}>
                    LOL<br />
                    LOL<br />
                    LOL<br />
                </Expandble>
                <Expandble name={'Managing the Account'}>
                    LOL<br />
                    LOL<br />
                    LOL<br />
                </Expandble>
                <Expandble name={'Payment and Gift card'}>
                    LOL<br />
                    LOL<br />
                    LOL<br />
                </Expandble>
            </div>
        </main>
    );
};

export default Help;