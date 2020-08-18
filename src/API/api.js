import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6cfc1217-abd2-4857-afa8-7b1b2cd43c4a'
    }
});

export const usersAPI ={
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    getUserId (userId = 2) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    sendUnfollowUser (id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    sendFollowUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    getUserAboutMe (){
        return instance.get(`auth/me`).then(response => response.data)
    }
};
