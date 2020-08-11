import React from 'react';
import UserHeader from './UserHeader/UserHeader'
import UserContent from './UserContent/UserContent'

const Profile = (props) => {
    return (
        <div>
            <UserHeader profile={props.profile}/>
            <UserContent />
        </div>
    )
}

export default Profile;