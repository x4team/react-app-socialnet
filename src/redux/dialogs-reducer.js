import DimychJPG from "../img/friends_avatars/Dimych.jpg";
import AndreyJPG from "../img/friends_avatars/Andrey.jpg";
import SergeyJPG from "../img/friends_avatars/Sergey.jpg";
import MihailJPG from "../img/friends_avatars/Mihail.jpg";
import VovanJPG from "../img/friends_avatars/Vovan.jpg";
import ValeriyJPG from "../img/friends_avatars/Valeriy.jpg";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your, man?'},
        {id: 3, message: 'Yo1'},
        {id: 4, message: 'Yo2'},
        {id: 5, message: 'Yo3'},
        {id: 6, message: 'Yo4'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych', avatar: DimychJPG},
        {id: 2, name: 'Andrey', avatar: AndreyJPG},
        {id: 3, name: 'Sergey', avatar: SergeyJPG},
        {id: 4, name: 'Mihail', avatar: MihailJPG},
        {id: 5, name: 'Vovan', avatar: VovanJPG},
        {id: 6, name: 'Valeriy', avatar: ValeriyJPG},
    ],
    newMessageBody: ''
};

// Принимает часть state
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body},);
            return state;
        default:
            return state;

    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY , body: body })


export default dialogsReducer;