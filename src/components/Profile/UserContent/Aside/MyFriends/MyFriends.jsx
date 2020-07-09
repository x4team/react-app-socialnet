import React from 'react';
import a from './../Aside.module.css';

const MyFriends = (props) => {

    return (
        <div>
            <h3 className={a.h3}>
                Friends:
            </h3>
            <div className={a.avatar_block}>
                { props.friendsElements }
            </div>

        </div>
    )
};

export default MyFriends;