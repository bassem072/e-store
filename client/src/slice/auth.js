import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import authService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async (
    { email, password, first_name, last_name, gender, birthday, roles },
    thunkAPI
  ) => {
    try {
        const data = await authService.register(email, password, first_name, last_name, gender, birthday, roles);
        return {user: data};
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login/email",
  async ({ email, password, remember }, thunkAPI) => {
    try {
        const data = await authService.login(email, password, remember);
        console.log("bassem", data);
        return { user: data };
    } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk(
    'auth/logout',
    () => {
        authService.logout();
    }
);

const initialState = {
      isLoading: false,
      isAuthenticated: false,
      user: user ?? null,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refreshToken: (state, action) => {
      state.user = { ...state.user, accessToken: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
      });
  },
});

export const { change, refreshToken } = authSlice.actions;

export default authSlice.reducer;
