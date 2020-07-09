import React from "react";
import n from './NewPost.module.css';
import Posts from "../Profile/UserContent/Posts/Posts";
import PostsContainer from "../Profile/UserContent/Posts/PostsContainer";

const NewPost = (props) => {
    return (
        <div className={n.wrapper}>
            <PostsContainer
                store={props.store}
            />
        </div>
    )
};

export default NewPost;