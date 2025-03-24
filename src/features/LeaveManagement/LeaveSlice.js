import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LeaveService from "./LeaveService";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("LeaveData");
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
        localStorage.setItem("LeaveData", serializedState);
    } catch (error) {
        console.log(error);
    }
};

const initialState = {     
    leaveData: loadState(),
    RecentLeaveRequests: loadState(),
    isLoading: false,     
    isError: false,     
    isSuccess: false,      
    message: "" 
};

const LeaveSlice = createSlice({
    name: "leave",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
           // LatestLocactionAll
      .addCase(GetLeaveBalance.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(GetLeaveBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.leaveData = action.payload;  
        saveState(state.leaveData);
      })
      .addCase(GetLeaveBalance.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    //   RecentLeaveRequestsList
    .addCase(RecentLeaveRequestsList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(RecentLeaveRequestsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.RecentLeaveRequests = action.payload;  
        saveState(state.RecentLeaveRequests);
      })
      .addCase(RecentLeaveRequestsList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    }
});

export const LeaveCreat = createAsyncThunk(
    "leaveData/LeaveCreat",
    async (data, {rejectWithValue }) => {    
        try {
            const response = await LeaveService.LeaveCreat(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
 


export const GetLeaveBalance = createAsyncThunk(
    "leaveData/LeaveCreat",
    async (data, {rejectWithValue }) => {    
         try {
            const response = await LeaveService.GetLeaveBalance(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const RecentLeaveRequestsList = createAsyncThunk(
    "leaveData/RecentLeaveRequestsList",
    async (data, {rejectWithValue }) => {    
        console.log(data);
        try {
            const response = await LeaveService.RecentLeaveRequestsList(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export default LeaveSlice.reducer;