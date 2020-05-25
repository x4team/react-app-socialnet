import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={d.dialog + ' ' + d.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={d.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs= [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Mihail'},
        {id: 5, name: 'Vovan'},
        {id: 6, name: 'Valeriy'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your, man?'},
        {id: 3, message: 'Yo1'},
        {id: 4, message: 'Yo2'},
        {id: 5, message: 'Yo3'},
        {id: 6, message: 'Yo4'},
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = messages
        .map( m => <Message message={m.message}/> );

    return (
        <div className={d.dialogs}>
            <div class={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs;