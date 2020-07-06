const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Принимает часть state
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};
export const addPostActionCreator = () => ({ type: ADD_POST }) // Так как в стрелочной функции мы возвращаем объект, то фигурные скобки нам надо обернуть в круглые скобки
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT , newText: text })

export default profileReducer;