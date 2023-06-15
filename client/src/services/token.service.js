const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return user?.refreshToken;
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.accessToken;
};

const updateLocalAccessToken = (token) => {
  const user = JSON.parse(localStorage.getItem("user"));
  user.accessToken = token;
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const setUser = (user) => {
    console.log("set user", user);
    console.log("set user after hashing", JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
    console.log("set user after saving", localStorage.getItem("user"));
};

const removeUser = () => {
    localStorage.removeItem("user");
};

const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
};

export default TokenService;