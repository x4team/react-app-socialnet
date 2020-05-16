import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.profile}>
            <div className={p.wrapper}>
                <div className={p.usercard}>
                    <div className={p.number}>999</div>
                    <div className={p.followers}>followers</div>
                    <img className={p.img} src={require('../../img/avatar.png')}/>
                    <div className={p.name}>Dmitry Rakov</div>
                </div>
                <div className={p.status}>
                    <div className={p.h1}>Good where we are.</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;