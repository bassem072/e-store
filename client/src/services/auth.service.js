import api from "./api";
import TokenService from "./token.service";

const API_URL = "http://localhost:5000/api/auth/";

const register = async (
  email,
  password,
  first_name,
  last_name,
  gender,
  birthday,
  roles
) => {
  return await api
    .post(API_URL + "signup", {
      email,
      password,
      first_name,
      last_name,
      gender,
      birthday,
      roles,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
        console.log("User updated");
      }
      return response.data;
    });
};
  
  
  const login = async (email, password, remember) => {
    console.log(email, password, remember);
    return await api
    .post(API_URL + "login/email", {
      email,
      password,
      remember,
    })
    .then((response) => {
      if (response.data.accessToken) {
          console.log("this is your data ", response.data.accessToken, response.data.refreshToken);
          console.log(response.data);
          TokenService.setUser(response.data);
        }
        return response.data;
      });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;