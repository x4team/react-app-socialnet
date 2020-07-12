import React from 'react';
import p from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    let onAddPost = () => {
        props.addPost();
    }

    //Создаем ссылку на textarea
    let newPostElement = React.createRef();

    let onPostChange = () => {
        // Здесь мы обращаемся к textarea, дальше к его current (его нативному элементу HTML) и дальше к значению
        // value у textarea
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={p.posts}>
            <div className={p.wrapper}>
                <h3 className={p.h3}>My posts</h3>
                <div className={p.form}>
                    // textarea привязывается к ссылке
                    // ref - здесь вместо id="text", но так как мы в REACT используем ТОЛЬКО Virtual DOM, а не DOM
                    // то и нам приходит на помощь React.createRef(). Это не лучший вариант и его надо избегать
                    <textarea className={ p.form__textarea } onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
                    <button className={ p.form__button } onClick={ onAddPost }>SEND</button>
                </div>
                { postsElements }
            </div>
        </div>
    )
}

export default Posts;