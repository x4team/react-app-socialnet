import React from "react";
import n from './NewPost.module.css';
import Posts from "../Profile/UserContent/Posts/Posts";

const NewPost = (props) => {
    return (
        <div className={n.wrapper}>
            <Posts profilePage={props.profilePage}
                   addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
};

export default NewPost;