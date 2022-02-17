import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './Layout.css'

function Layout(props) {
    return (
        <div className='Layout'>
            <Header />
                <main>
                    {props.children}
                </main>
            <Footer />
        </div>
    );
}

export default Layout;