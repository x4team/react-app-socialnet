import React from 'react';
import p from './Profile.module.css';
import UserHeader from './UserHeader/UserHeader'
import UserContent from './UserContent/UserContent'
import Posts from "./UserContent/Posts/Posts";


const Profile = (props) => {
    return (
        <div>
            <UserHeader />
            <UserContent
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;