import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../slice/auth";
import messageReducer from "../slice/message";
import dashboardSettingReducer from "../slice/dashboardSetting";
import adminReducer from "../slice/admin";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    message: messageReducer,
    dashboardSetting: dashboardSettingReducer,
    admin: adminReducer,
  },
});
