import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={n.wrapper}>
            <nav className={n.nav}>
                <menu className={n.menu}>
                    <a href="#home" className={`${n.home} ${n.active}`}></a>
                    <a href="#newpost" className={n.newpost}></a>
                    <a href="#message" className={n.message}></a>
                    <a href="#friends" className={n.friends}></a>
                    <a href="#media" className={n.media}></a>
                    <a href="#feeds" className={n.feeds}></a>
                </menu>
                {/*<ul className={n.menu}>*/}
                {/*    <li><a className={n.link} href="#home"><div className={n.home}></div></a></li>*/}
                {/*    <li><a href="#newpost"><div className={n.newpost}></div></a></li>*/}
                {/*    <li><a href="#message"><div className={n.message}></div></a></li>*/}
                {/*    <li><a href="#friends"><div className={n.friends}></div></a></li>*/}
                {/*    <li><a href="#media"><div className={n.media}></div></a></li>*/}
                {/*    <li><a href="#feeds"><div className={n.feeds}></div></a></li>*/}
                {/*</ul>*/}
            </nav>
        </div>

    )
}

export default Navbar;