import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";
import axiosInstance from "../services/api";
import TokenService from "../services/token.service";
import { logout, refreshToken } from "../slice/auth";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export default function AuthRoutes({ roles }) {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const user = TokenService.getUser();
  const dispatch = useDispatch();
  const prevRoute = useLocation();

  useEffect(() => {
    if (user) {
      const decodedJwt = parseJwt(user.accessToken);
      console.log("1");
      if ((decodedJwt.exp - 10) * 1000 < Date.now()) {
        console.log("2");
        const refresh = TokenService.getLocalRefreshToken();
        if (refresh) {
          console.log("3");
          axiosInstance
            .post("/auth/refreshToken", {
              refreshToken: refresh,
            })
            .then((res) => {
              const { accessToken } = res.data;

              dispatch(refreshToken(accessToken));

              TokenService.updateLocalAccessToken(accessToken);
              setStatus(1);
              setLoading(false);
            })
            .catch((err) => {
              if (err.response && err.response.status === 403) {
                dispatch(logout());
                setStatus(2);
              } else {
                setStatus(3);
              }
              setLoading(false);
            });
        } else {
          dispatch(logout());
          setStatus(2);
          setLoading(false);
        }
      } else {
        setStatus(1);
        setLoading(false);
      }
    } else {
      setStatus(2);
      setLoading(false);
    }
  }, [dispatch, user]);

  if (loading) {
    return <Loading />;
  } else {
    if (status === 1) {
      if (roles) {
        console.log(roles, "Inside");
        console.log(user, "Inside");
        let havePermissions = false;
        for (const role in roles) {
          console.log("ROLE_" + roles[role].toUpperCase());
          if (user.roles.includes("ROLE_" + roles[role].toUpperCase())) {
            havePermissions = true;
            break;
          }
        }
        console.log(havePermissions, "Inside");
        if (!havePermissions) {
          return <Navigate to="/error403" replace />;
        } else {
          return <Outlet />;
        }
      } else {
        return <Outlet />;
      }
    } else if (status === 2) {
      return <Navigate to="/auth" state={{ prevRoute }} replace />;
    } else {
      return <Navigate to="/error500" state={{ prevRoute }} replace />;
    }
  }
}
