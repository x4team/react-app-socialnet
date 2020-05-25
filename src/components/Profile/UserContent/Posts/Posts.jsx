import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My name is Dmitry!', likesCount: 1100},
        {id: 4, message: 'Blalaal?', likesCount: 1300},
        {id: 5, message: 'Lalalla?', likesCount: 1400},
        {id: 6, message: 'Kakakaka?', likesCount: 1500},
        {id: 7, message: 'Mammama?', likesCount: 1600}
    ];

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    return (
        <div className={p.posts}>
            <div className={p.wrapper}>
                <h3 className={p.h3}>My posts</h3>
                <div className={p.form}>
                    <textarea className={p.form__textarea}>your text...</textarea>
                    <button className={p.form__button}>SEND</button>
                </div>
                { postsElements }
            </div>
        </div>
    )
}

export default Posts;