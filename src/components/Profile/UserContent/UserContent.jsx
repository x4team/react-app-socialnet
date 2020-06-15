import React from 'react';
import u from './UserContent.module.css';
import Posts from './Posts/Posts'
import Aside from './Aside/Aside'

const UserContent = (props) => {
    return (
        <div className={u.user_content}>
            <div className={u.wrapper}>
                <Aside profilePage={props.profilePage}
                       className={u.aside}
                />
                <Posts profilePage={props.profilePage}
                       addPost={props.addPost}
                       newPostText={props.profilePage.newPostText}
                       updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>
    )
}

export default UserContent;