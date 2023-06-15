import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    collapse: false,
}

const dashboardSetting = createSlice({
  name: "dashboardSetting",
  initialState,
  reducers: {
    setCollapse: (state) => {
        state.collapse = !state.collapse;
    }
  },
});

export const { setCollapse } = dashboardSetting.actions;

export default dashboardSetting.reducer;