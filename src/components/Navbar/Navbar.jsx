import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={n.wrapper}>
            <nav className={n.nav}>
                <menu className={n.menu}>
                    <a href="/profile" className={`${n.home} ${n.active}`}></a>
                    <a href="/newpost" className={n.newpost}></a>
                    <a href="/dialogs" className={n.message}></a>
                    <a href="/friends" className={n.friends}></a>
                    <a href="/media" className={n.media}></a>
                    <a href="/feeds" className={n.feeds}></a>
                </menu>
            </nav>
        </div>

    )
}

export default Navbar;