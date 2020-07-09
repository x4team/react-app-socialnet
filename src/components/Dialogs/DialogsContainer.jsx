import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                let onNewMesageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };
                return <Dialogs updateNewMessageBody={onNewMesageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;