import React from 'react';
import p from './Post.module.css';
import Avatar from '../../../../../img/avatar.png';

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src={Avatar} className={p.img}></img>{props.message}
            <span> like</span> {props.likesCount}
        </div>
    )
}

export default Post;