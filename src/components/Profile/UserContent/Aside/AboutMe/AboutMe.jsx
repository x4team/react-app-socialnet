import React from 'react';
import a from './../Aside.module.css';
import Preloader from "../../../../common/Preloader/Preloader";

const AboutMe = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={a.aboutMe}>
            <h3 className={a.h3}>
                About me:
            </h3>
            <p className={a.p}>{props.profile.aboutMe}</p>
            <p className={a.p}><span className={a.span}>Birth:</span> 19.09.1985</p>
            <p className={a.p}><span className={a.span}>Location:</span> Laos Tran</p>
            <p className={a.p}><span className={a.span}>Website:</span> {props.profile.contacts.website}</p>
            <p className={a.p}><span className={a.span}>Job Status:</span> {props.profile.lookingForAJob?'looking for work':'not looking for work'}</p>
            <p className={a.p}><span className={a.span}>Job Description:</span>{props.profile.lookingForAJobDescription}</p>
            <p className={a.p}><span className={a.span}>Contacts:</span></p>
            <p className={a.p}>Facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></p>
            <p className={a.p}>VK: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></p>
            <p className={a.p}>Twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></p>
            <p className={a.p}>Instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></p>
            <p className={a.p}>YouTube: <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></p>
            <p className={a.p}>GitHub: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></p>
            <p className={a.p}>MainLink: <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></p>

        </div>
    )
};

export default AboutMe;