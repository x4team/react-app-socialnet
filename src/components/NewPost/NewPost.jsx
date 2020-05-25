import React from "react";
import n from './NewPost.module.css';
import Posts from "../Profile/UserContent/Posts/Posts";

const NewPost = (props) => {
    return (
        <div className={n.wrapper}>
            <Posts message='Hi, how are you?' likesCount='50000'/>
        </div>
    )
};

export default NewPost;