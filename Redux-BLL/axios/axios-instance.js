import * as axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export default axios;