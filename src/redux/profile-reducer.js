import DimychJPG from "../img/friends_avatars/Dimych.jpg";
import AndreyJPG from "../img/friends_avatars/Andrey.jpg";
import SergeyJPG from "../img/friends_avatars/Sergey.jpg";
import MihailJPG from "../img/friends_avatars/Mihail.jpg";
import VovanJPG from "../img/friends_avatars/Vovan.jpg";
import ValeriyJPG from "../img/friends_avatars/Valeriy.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//Инициализируем стартовый state
let initialState = {
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
}

// Принимает часть state
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: {
            let stateCopy = {...state};
            return stateCopy;
        }
    }
};
export const addPostActionCreator = () => ({ type: ADD_POST }) // Так как в стрелочной функции мы возвращаем объект, то фигурные скобки нам надо обернуть в круглые скобки
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT , newText: text })

export default profileReducer;