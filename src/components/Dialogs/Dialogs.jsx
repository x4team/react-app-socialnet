import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem avatar={d.avatar} name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMesageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
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