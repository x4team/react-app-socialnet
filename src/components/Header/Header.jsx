import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <img src={require('../../img/logo_img.png')} className={h.logo}/>
            <div className={h.loginBlock}>
                {props.isAuth ? <NavLink to={'/settings'}><div className={h.settings}></div></NavLink>

                    : <NavLink to={'/profile'}><img src={require('../../img/home.png')} className={h.home}/> </NavLink>

                }
                <NavLink to={'/login'}><div className={h.login}></div></NavLink>

                </div>
        </header>
    )
}

export default Header;