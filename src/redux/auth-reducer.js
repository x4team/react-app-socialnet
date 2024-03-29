import {authAPI, usersAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

//Инициализируем стартовый state
let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    profile: null
};

// Принимает часть state
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
};
//Задача этой функции вернуть объект action
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export default authReducer;