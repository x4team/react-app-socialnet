import React from "react";
import f from './Friends.module.css';
import MyFriends from '../Profile/UserContent/Aside/MyFriends/MyFriends';

const Friends = (props) => {
    return (
        <div className={f.wrapper}>
            <div className={f.friends}>
              <MyFriends profilePage={props.profilePage}/>
            </div>
        </div>
    )
};

export default Friends;