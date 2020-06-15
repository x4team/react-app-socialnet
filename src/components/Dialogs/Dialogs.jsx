import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    let newPostElement = React.createRef();

    return (
        <div className={d.dialogs}>
            <div class={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                <div className={d.form}>
                <textarea className={d.form__textarea} ref={newPostElement}></textarea>
                <button className={d.form__button} onClick={ addPost }>SEND</button>
                    </div>
                 { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs;