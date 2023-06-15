import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { register } from "../../../slice/auth";
import { clearMessage } from "../../../slice/message";

export default function Register({ setIsLogin }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();

  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }

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
    } else if (
      !RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      ).test(values.password)
    ) {
      errors.password =
        "Password must be have lowercase and uppercase and special characters and numbers and > 8 characters";
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = "Required";
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = errors.repeatPassword =
        "Password and repeat password are not the same";
    }

    const date = new Date(values.year + "-" + values.month + "-" + values.day);

    if (!(date.getDate() === Number(values.day))) {
      errors.date = "Invalid Date";
    }

    if (!values.gender) {
      errors.gender = "Required";
    }

    return errors;
  };

  const current_day = new Date().getDate();
  var days = [];
  for (var i = 1; i < 32; i++) {
    days.push(i);
  }

  const current_month = new Date().getMonth();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const current_year = new Date().getFullYear();
  var years = [];
  for (i = current_year; i >= current_year - 150; i--) {
    years.push(i);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      day: current_day,
      month: current_month + 1,
      year: current_year,
      gender: 1,
    },
    validate,
    onSubmit: (values) => {
      const g = ["male", "female"];
      let date = new Date(values.year + "-" + values.month + "-" + values.day);
      const { username, email, password, firstName, lastName, gender } = values;
      setLoading(true);
      const userData = {
        email,
        password,
        username,
        first_name: firstName,
        last_name: lastName,
        gender: g[gender - 1],
        birthday: date,
        roles: ["user"],
      };
      alert(JSON.stringify(userData, null, 2));
      dispatch(register(userData))
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
          SignUp
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex gap-2 lg:gap-5">
            <div className="mb-5">
              <span className="form-span">First Name</span>
              <input
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className={
                  "form-input " +
                  (formik.touched.firstName && formik.errors.firstName
                    ? "border-red-600"
                    : "")
                }
              />
              <div className="h-4 pt-1 w-fit text-sm">
                {formik.touched.firstName && formik.errors.firstName
                  ? "* " + formik.errors.lastName
                  : null}
              </div>
            </div>
            <div className="mb-5">
              <span className="form-span">Last Name</span>
              <input
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className={
                  "form-input " +
                  (formik.touched.lastName && formik.errors.lastName
                    ? "border-red-600"
                    : "")
                }
              />
              <div className="h-4 pt-1 w-fit text-sm">
                {formik.touched.lastName && formik.errors.lastName
                  ? "* " + formik.errors.lastName
                  : null}
              </div>
            </div>
          </div>
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
          <div className="mb-5">
            <span className="form-span">Repeat Password</span>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="repeatPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                className={
                  "form-input " +
                  (formik.touched.repeatPassword && formik.errors.repeatPassword
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
                (formik.touched.repeatPassword && formik.errors.repeatPassword
                  ? "h-9"
                  : "h-4")
              }
            >
              {formik.touched.repeatPassword && formik.errors.repeatPassword
                ? "* " + formik.errors.repeatPassword
                : null}
            </div>
          </div>
          <div className="mb-5">
            <span className="form-span">Birthday</span>
            <div className="flex gap-2">
              <select
                name="day"
                placeholder="day"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.day}
                className={
                  "w-full border-[1px] rounded-3xl px-4 py-2 focus:outline-none bg-transparent " +
                  (formik.errors.date ? "border-red-600" : "border-secondary")
                }
              >
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                name="month"
                placeholder="Month"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.month}
                className={
                  "w-full border-[1px] rounded-3xl px-4 py-2 focus:outline-none bg-transparent " +
                  (formik.errors.date ? "border-red-600" : "border-secondary")
                }
              >
                {months.map((month, key) => (
                  <option key={key} value={key + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="year"
                placeholder="Year"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.year}
                className={
                  "w-full border-[1px] rounded-3xl px-4 py-2 focus:outline-none bg-transparent " +
                  (formik.errors.date ? "border-red-600" : "border-secondary")
                }
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="h-4 pt-1 w-fit text-sm">
              {formik.errors.date ? "* " + formik.errors.date : null}
            </div>
          </div>
          <div className="mb-5">
            <span className="form-span">Gender</span>
            <div className="flex gap-2">
              <div
                className={
                  "flex justify-between w-full border-[1px] rounded-3xl p-2 " +
                  (formik.errors.gender ? "border-red-600" : "border-secondary")
                }
              >
                <p>Male</p>
                <input
                  type="radio"
                  name="gender"
                  value={1}
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.gender === 1}
                />
              </div>
              <div
                className={
                  "flex justify-between w-full border-[1px] rounded-3xl p-2 " +
                  (formik.touched.gender && formik.errors.gender
                    ? "border-red-600"
                    : "border-secondary")
                }
              >
                <p>Female</p>
                <input
                  type="radio"
                  name="gender"
                  value={2}
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.gender === 2}
                />
              </div>
            </div>
            <div className="h-4 pt-1 w-fit text-sm">
              {formik.touched.gender && formik.errors.gender
                ? "* " + formik.errors.gender
                : null}
            </div>
          </div>
          <div className="mb-5">
            <input
              type="submit"
              disabled={loading ? true : false}
              value="Register"
              className="form-input bg-primary hover:bg-hover-primary hover:cursor-pointer text-white font-bold"
            />
          </div>
          <div className="mb-5">
            <div className="flex gap-2">
              <p className="text-secondary">Did you have an account?</p>
              <button
                className="text-primary font-bold"
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </button>
            </div>
          </div>
          {message && (
            <div
              class="p-4 mb-4 text-center text-sm text-red-800 rounded-lg bg-red-50"
              role="alert"
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
