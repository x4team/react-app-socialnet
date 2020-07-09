import React from 'react';
import u from './UserContent.module.css';
import Aside from './Aside/Aside'
import PostsContainer from "./Posts/PostsContainer";

const UserContent = (props) => {
    return (
        <div className={u.user_content}>
            <div className={u.wrapper}>
                <Aside //store={props.store}
                       className={u.aside}
                />
                <PostsContainer
                       //store={props.store}
                />
            </div>
        </div>
    )
}

export default UserContent;