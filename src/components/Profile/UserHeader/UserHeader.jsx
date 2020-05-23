import React from 'react';
import u from './UserHeader.module.css';

const UserHeader = () => {
    return (
        <div className={u.user_header}>
            <div className={u.wrapper}>
                <div className={u.usercard_bg}>
                    <div className={u.usercard}>
                        <div className={u.number}>999</div>
                        <div className={u.followers}>followers</div>
                        <img className={u.img} src={require('../../../img/avatar.png')}/>
                        <div className={u.name}>Dmitry Rakov</div>
                    </div>
                    <div className={u.status}>
                        <div className={u.h1}>Good where we are.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader;