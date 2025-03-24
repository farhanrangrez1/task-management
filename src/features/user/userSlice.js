import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return null; 
    }
    return JSON.parse(serializedState); 
  } catch (error) {
    console.log(error);
    return null; 
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
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginFrom.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(LoginFrom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.userData;
      })
      .addCase(LoginFrom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const LoginFrom = createAsyncThunk(
"user/LoginFrom",
  async (data, { rejectWithValue }) => {    
    try {
      const response = await userService.LoginFrom(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { logout } = userSlice.actions;
export default userSlice.reducer;