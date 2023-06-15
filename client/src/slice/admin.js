import { createSlice } from "@reduxjs/toolkit";
import adminList from "../data/dashboard/admins";

const initialState = {
  sortBy: "name",
  inc: true,
  numberOfRows: 10,
  search: "",
  list: adminList,
};

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.inc = true;
    },
    setInc: (state) => {
      state.inc = !state.inc;
    },
    setNumberOfRows: (state, action) => {
      state.numberOfRows = action.payload;
    },
    setSearch: (state, action) => {
      console.log(action.payload);
      state.search = action.payload;
    },
  },
});

export const { setSortBy, setInc, setNumberOfRows, setSearch } = admin.actions;

export default admin.reducer;
