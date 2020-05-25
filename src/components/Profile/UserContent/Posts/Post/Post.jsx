import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            {props.message}
            <span> like</span> {props.likesCount}
        </div>
    )
}

export default Post;