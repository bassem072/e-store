import api from "./api";

const API_URL = "http://localhost:5000/api/test/";

const getPublicContent = () => {
    return api.get(API_URL + "all");
};

const getUserBoard = () => {
    return api.get(API_URL + "user");
};

const getAdminBoard = () => {
    return api.get(API_URL + "admin");
};

const getModeratorBoard = () => {
    return api.get(API_URL + "mod");
};

const userService = {
    getPublicContent,
    getUserBoard,
    getAdminBoard,
    getModeratorBoard,
};

export default userService;