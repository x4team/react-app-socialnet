import MihailJPG from '../img/friends_avatars/Mihail.jpg';
import AndreyJPG from '../img/friends_avatars/Andrey.jpg';
import SergeyJPG from '../img/friends_avatars/Sergey.jpg';
import VovanJPG from '../img/friends_avatars/Vovan.jpg';
import ValeriyJPG from '../img/friends_avatars/Valeriy.jpg';
import DimychJPG from '../img/friends_avatars/Dimych.jpg';
import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    },
    sidebar: {
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;