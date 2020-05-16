import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src={require('../../img/logo_img.png')} className={h.logo}/>
            <div className={h.menu}>
                <a href='#settings'><div className={h.settings}></div></a>
                <a href='#home'><img src={require('../../img/home.png')} className={h.home}/> </a>
                <a href='#logout'><div className={h.logout}></div></a>
            </div>
        </header>
    )
}

export default Header;