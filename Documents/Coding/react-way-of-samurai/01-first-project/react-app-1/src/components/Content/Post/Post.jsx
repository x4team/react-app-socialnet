import React from 'react';
import m from './Post.module.css';

const Post = (props) => {
    return (
        <div className={m.item}>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;