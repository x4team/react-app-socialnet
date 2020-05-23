import React from 'react';
import p from './Profile.module.css';
import UserHeader from './UserHeader/UserHeader'
import UserContent from './UserContent/UserContent'


const Profile = () => {
    return (
        <div>
            <UserHeader />
            <UserContent />
        </div>
    )
}

export default Profile;