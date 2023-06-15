import axiosInstance from "./api";
import TokenService from "./token.service";
import { refreshToken, logout } from "../slices/auth";

const setup = (store) => {
  const { dispatch } = store;

  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;

      if (
        error.response &&
        error.response.status === 403 &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true;

        try {
          const refresh = TokenService.getLocalRefreshToken();
          if(refresh) {
            const res = await axiosInstance.post("/auth/refreshToken", {
              refreshToken: refresh,
            });

            const { accessToken } = res.data;

            dispatch(refreshToken(accessToken));

            TokenService.updateLocalAccessToken(accessToken);

            return axiosInstance(originalConfig);
          } else {
            dispatch(logout());
            window.location.reload();
            return ;
          }
        } catch (err) {
          dispatch(logout());
          window.location.reload();
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default setup;
