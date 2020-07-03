import React from 'react';
import p from './Profile.module.css';
import UserHeader from './UserHeader/UserHeader'
import UserContent from './UserContent/UserContent'


const Profile = (props) => {
    return (
        <div>
            <UserHeader />
            <UserContent
                profilePage={props.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;