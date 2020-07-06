import MihailJPG from '../img/friends_avatars/Mihail.jpg';
import AndreyJPG from '../img/friends_avatars/Andrey.jpg';
import SergeyJPG from '../img/friends_avatars/Sergey.jpg';
import VovanJPG from '../img/friends_avatars/Vovan.jpg';
import ValeriyJPG from '../img/friends_avatars/Valeriy.jpg';
import DimychJPG from '../img/friends_avatars/Dimych.jpg';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'My name is Dmitry!', likesCount: 1100},
                {id: 4, message: 'Blalaal?', likesCount: 1300},
                {id: 5, message: 'Lalalla?', likesCount: 1400},
                {id: 6, message: 'Kakakaka?', likesCount: 1500},
                {id: 7, message: 'Mammama?', likesCount: 1600},
            ],
            friends: [
                {id: 1, name: 'Dimych', avatar: DimychJPG},
                {id: 2, name: 'Andrey', avatar: AndreyJPG},
                {id: 3, name: 'Sergey', avatar: SergeyJPG},
                {id: 4, name: 'Mihail', avatar: MihailJPG},
                {id: 5, name: 'Vovan', avatar: VovanJPG},
                {id: 6, name: 'Valeriy', avatar: ValeriyJPG},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
// Обращаемся к store в консоли разработчика
window.store = store;
