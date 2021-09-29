import axios from 'axios';

const instance = axios.create({
  headers: {
    "API-KEY": "e5464d70-c17a-455f-b821-8d099218ce9c",
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data);
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  }
};

export const profileAPI = {
    getProfile(userId) {
      return instance.get(`profile/${userId}`)
        .then(response => response.data);
    }
};
