import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
                <div className='homecart'>
                    Home-Cart
                </div>
                <div>
                    <div className='searchbar'>
                        <input/>
                        
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <svg className='cart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M510.12,136.08A57.6,57.6,0,0,0,454.37,64H90L76.42,9.71A12.79,12.79,0,0,0,64,0H12.8a12.8,12.8,0,0,0,0,25.6H54l97.73,392.07a51.16,51.16,0,1,0,77,55.93H347.28a51.2,51.2,0,1,0,0-25.6H228.71a51.24,51.24,0,0,0-49.51-38.4c-1,0-2,.09-3.06.15l-12.8-51.35H407.83a57.61,57.61,0,0,0,55.75-43.12l12.07-46.48H141l-6.38-25.6H482.3l16.62-64H118.67l-6.38-25.6H505.57Z"/></svg>
        </div>
    );
};

export default Header;