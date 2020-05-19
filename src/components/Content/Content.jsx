import React from 'react';
import c from './Content.module.css';
import Post from './Post/Post'
import Aside from './Aside/Aside.jsx'

const Content = () => {
    return (
        <div className={c.wrapper}>
            <Aside className={c.aside}/>
            <Post message='Hi, how are you?' likesCount='50'/>
        </div>
    )
}

export default Content;