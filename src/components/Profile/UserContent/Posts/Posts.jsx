import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const Posts = (props) => {
    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    // 2 функции addPost и onPostChange - обработчики событий textarea и button
    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={p.posts}>
            <div className={p.wrapper}>
                <h3 className={p.h3}>My posts</h3>
                <div className={p.form}>
                    <textarea className={ p.form__textarea } onChange={ onPostChange } ref={ newPostElement } value={ props.profilePage.newPostText }/>
                    <button className={ p.form__button } onClick={ addPost }>SEND</button>
                </div>
                { postsElements }
            </div>
        </div>
    )
}

export default Posts;