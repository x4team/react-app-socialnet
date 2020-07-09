import React from 'react';
import a from './../Aside.module.css';
import MyFriends from "./MyFriends";

const MyFriendsContainer = (props) => {
    let state = props.store.getState();

    let friendsElements = state.profilePage.friends.map(
        p => <a className={a.avatar_block}>
            <img className={a.img} src={p.avatar}/>
            <span className={a.name}>{p.name}</span></a>);

    return (
        <MyFriends friendsElements={friendsElements}/>
    )
};

export default MyFriendsContainer;