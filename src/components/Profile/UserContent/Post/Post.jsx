import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.posts}>
            <div className={p.wrapper}>
                <h3 className={p.h3}>My posts</h3>
                <div className={p.form}>
                    <textarea className={p.form__textarea}>your text...</textarea>
                    <button className={p.form__button}>SEND</button>
                </div>
                <div className={p.item}>
                    {props.message}
                    <span> like</span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;