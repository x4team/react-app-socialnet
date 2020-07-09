import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMesageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={d.dialogs}>
            <div class={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                <div>{ messagesElements }</div>
                <div className={d.form}>
                    <textarea value={newMessageBody}
                              onChange={onNewMesageChange}
                              className={d.form__textarea}
                              placeholder='Enter your message'></textarea>
                    <button className={d.form__button} onClick={onSendMessageClick}>SEND</button>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;