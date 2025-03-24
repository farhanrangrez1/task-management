import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import geoLocationService from "./geoLocationService";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("AllLocation");
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
    localStorage.setItem("AllLocation", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const initialState = {     
  Location: loadState,       
  isLoading: false,     
  isError: false,     
  isSuccess: false,      
  message: "" 
};

const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // LatestLocactionAll
      .addCase(LatestLocactionAll.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(LatestLocactionAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Location = action.payload;  
        saveState(state.Location);
      })
      .addCase(LatestLocactionAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // GetEmployeStatusList
      .addCase(GetEmployeStatusList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(GetEmployeStatusList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Location = action.payload;  
        saveState(state.Location);
      })
      .addCase(GetEmployeStatusList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // LatestLocactionList
      .addCase(LatestLocactionList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(LatestLocactionList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Location = action.payload;  
        saveState(state.Location);
      })
      .addCase(LatestLocactionList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    },
});


export const LatestLocactionAll = createAsyncThunk(
  "Location/LatestLocactionAll",
  async (data, {rejectWithValue }) => {
    try {
      const response = await geoLocationService.LatestLocactionAll(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const SetGeophenceAdd = createAsyncThunk(
  "Location/SetGeophenceAdd",
  async (data, {rejectWithValue }) => {    
    try {
      const response = await geoLocationService.SetGeophenceAdd(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetEmployeStatusList = createAsyncThunk(
  "Location/GetEmployeStatusList",
  async (data, {rejectWithValue }) => {    
    try {
      const response = await geoLocationService.GetEmployeStatusList(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetEmployeStatusDelete = createAsyncThunk(
  "Location/GetEmployeStatusList",
  async (id,{rejectWithValue }) => {    
    try {
      const response = await geoLocationService.GetEmployeStatusDelete(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const LatestLocactionList = createAsyncThunk(
  "Location/LatestLocactionList",
  async (data, {rejectWithValue }) => {    
    try {
      const response = await geoLocationService.LatestLocactionList(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export default geoLocationSlice.reducer;
