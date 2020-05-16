import React from 'react';
import c from './Content.module.css';
import Post from './Post/Post'

const Content = () => {
    return (
        <div className={c.content}>
            <div className={c.wrapper}>
                <h3 className={c.h3}>My posts</h3>
                <div className={c.form}>
                    <textarea className={c.form__textarea}>your text...</textarea>
                    <button className={c.form__button}>SEND</button>
                </div>
                <div className={c.posts}>
                    <Post message='Hi, how are you?' likesCount='50'/>
                    <Post message="It\'s my first post" likesCount='20'/>
                </div>
            </div>
        </div>
    )
}

export default Content;