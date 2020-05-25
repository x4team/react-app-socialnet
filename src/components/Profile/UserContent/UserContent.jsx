import React from 'react';
import u from './UserContent.module.css';
import Posts from './Posts/Posts'
import Aside from './Aside/Aside'

const UserContent = () => {
    return (
        <div className={u.user_content}>
            <div className={u.wrapper}>
                <Aside className={u.aside}/>
                <Posts />
            </div>
        </div>
    )
}

export default UserContent;