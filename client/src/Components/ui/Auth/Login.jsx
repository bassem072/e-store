import React, { useEffect, useState } from "react";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../../assets/images/auth/facebook.png";
import google from "../../../assets/images/auth/google.png";
import github from "../../../assets/images/auth/github.png";
import { login } from "../../../slice/auth";
import { clearMessage, setMessage } from "../../../slice/message";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ setIsLogin }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },
    onSubmit: (values) => {
      setMessage("");
      const { email, password, remember } = values;
      setLoading(true);
      const userData = {
        email,
        password,
        remember,
      };
      alert(JSON.stringify(userData, null, 2));
      dispatch(login({ email, password, remember }))
        .unwrap()
        .then(() => {
          if (location.state && location.state.prevRoute) {
            navigate(location.state.prevRoute);
          } else {
            navigate("/");
          }
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    },
  });

  return (
    <div className="w-full lg:w-1/2 h-full flex justify-center items-center z-10">
      <div className="w-full lg:w-1/2 p-10 lg:p-0 m-[50px] lg:m-0 bg-white/80">
        <h2 className="text-[#607d8b] font-semibold text-2xl uppercase mb-5 border-b-4 border-primary inline-block tracking-[1px]">
          Login
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <span className="form-span">Email</span>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                "form-input " +
                (formik.touched.email && formik.errors.email
                  ? "border-red-600"
                  : "")
              }
            />
            <div className="h-4 pt-1 w-fit text-sm">
              {formik.touched.email && formik.errors.email
                ? "* " + formik.errors.email
                : null}
            </div>
          </div>
          <div className="mb-5">
            <span className="form-span">Password</span>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  "form-input " +
                  (formik.touched.password && formik.errors.password
                    ? "border-red-600"
                    : "")
                }
              />
              <button
                type="button"
                className="absolute top-0 right-0 w-[60px] h-full cursor-pointer flex justify-center items-center text-slate-700"
                onClick={() => setShow(!show)}
              >
                <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
              </button>
            </div>
            <div
              className={
                "pt-1 w-fit text-sm " +
                (formik.touched.password && formik.errors.password
                  ? "h-9"
                  : "h-4")
              }
            >
              {formik.touched.password && formik.errors.password
                ? "* " + formik.errors.password
                : null}
            </div>
          </div>
          <div className="mb-2.5 text-secondary font-normal text-sm">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                name="remember"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.remember}
                className="checked:accent-primary h-4 w-4 rounded-full align-middle border-[1.5px] border-secondary"
              />
              Remember Me
            </label>
          </div>
          <div className="mb-5">
            <input
              type="submit"
              value="Login"
              disabled={loading ? true : false}
              className="form-input bg-primary hover:bg-hover-primary hover:cursor-pointer text-white font-bold"
            />
          </div>
          <div className="mb-5">
            <div className="flex gap-2">
              <p className="text-secondary">Don't have an account?</p>
              <button
                className="text-primary font-bold"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        {message && (
          <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 text-center"
            role="alert"
          >
            {message}
          </div>
        )}
        <h3 className="text-secondary text-center mt-[30px] lg:mt-20 mb-2.5 font-medium">
          Login with social media
        </h3>
        <ul className="flex justify-center items-center">
          <li className="social-item">
            <img src={google} alt="google" className="scale-50 invert" />
          </li>
          <li className="social-item">
            <img src={facebook} alt="facebook" className="scale-50 invert" />
          </li>
          <li className="social-item">
            <img src={github} alt="github" className="scale-50 invert" />
          </li>
        </ul>
      </div>
    </div>
  );
}
