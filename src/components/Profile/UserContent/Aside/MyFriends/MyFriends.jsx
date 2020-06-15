import React from 'react';
import a from './../Aside.module.css';

const MyFriends = (props) => {
    let friendsElements = props.profilePage.friends.map(
        p => <a className={a.avatar_block}>
            <img className={a.img} src={p.avatar}/>
            <span className={a.name}>{p.name}</span></a>);

    return (
        <div>
            <h3 className={a.h3}>
                Friends:
            </h3>
            <div className={a.avatar_block}>
                { friendsElements }
            </div>

        </div>
    )
};

export default MyFriends;