import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.addPost();
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={p.posts}>
            <div className={p.wrapper}>
                <h3 className={p.h3}>My posts</h3>
                <div className={p.form}>
                    <textarea className={p.form__textarea} onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
                    <button className={p.form__button} onClick={ addPost }>SEND</button>
                </div>
                { postsElements }
            </div>
        </div>
    )
}

export default Posts;