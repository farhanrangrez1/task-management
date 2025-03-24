import {  createSlice } from "@reduxjs/toolkit";
import userService from "./geoTrackerService";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return []; 
    }
    return JSON.parse(serializedState); 
  } catch (error) {
    console.log(error);
    return []; 
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("user", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  user: loadState(), 
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;