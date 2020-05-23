import React from 'react';
import u from './UserContent.module.css';
import Post from './Post/Post'
import Aside from './Aside/Aside.jsx'

const UserContent = () => {
    return (
        <div className={u.user_content}>
            <div className={u.wrapper}>
                <Aside className={u.aside}/>
                <Post message='Hi, how are you?' likesCount='50'/>
            </div>
        </div>
    )
}

export default UserContent;