import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={n.wrapper}>
            <nav className={n.nav}>
                <menu className={n.menu}>
                    <NavLink to="/profile" className={n.home} activeClassName={n.activeLink}></NavLink>
                    <NavLink to="/newpost" className={n.newpost} activeClassName={n.activeLink}></NavLink>
                    <NavLink to="/dialogs" className={n.message} activeClassName={n.activeLink}></NavLink>
                    <NavLink to="/users" className={n.users} activeClassName={n.activeLink}></NavLink>
                    <NavLink to="/music" className={n.music} activeClassName={n.activeLink}></NavLink>
                    <NavLink to="/feeds" className={n.feeds} activeClassName={n.activeLink}></NavLink>
                </menu>
            </nav>
        </div>

    )
}

export default Navbar;