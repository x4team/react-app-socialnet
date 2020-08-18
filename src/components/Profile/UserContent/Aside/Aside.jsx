import React from 'react';
import a from './Aside.module.css';
import AboutMe from './AboutMe/AboutMe'
import MyFriends from './MyFriends/MyFriends'

const Aside = (props) => {
    return (
        <aside className={a.aside}>
            <div className={a.wrapper}>
              <AboutMe profile={props.profile}/>
              <MyFriends store={props.store}/>
            </div>
        </aside>
    )
}

export default Aside;