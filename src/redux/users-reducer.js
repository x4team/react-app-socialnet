import DimychJPG from "../img/friends_avatars/Dimych.jpg";
import AndreyJPG from "../img/friends_avatars/Andrey.jpg";
import SergeyJPG from "../img/friends_avatars/Sergey.jpg";
import MihailJPG from "../img/friends_avatars/Mihail.jpg";
import VovanJPG from "../img/friends_avatars/Vovan.jpg";
import ValeriyJPG from "../img/friends_avatars/Valeriy.jpg";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

//Инициализируем стартовый state
let initialState = {
    users:[]
};

// Принимает часть state
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return { ...state,
                users: state.users.map(u => {
                 if(u.id === action.userID) {
                     return {...u, followed: true};
                 }
                  return u;
                })
            }
        case UNFOLLOW:
            return { ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users] }
        default:
            return state;
    }
};
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;