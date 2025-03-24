import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProfileService from "./ProfileService";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("profileData");
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
        localStorage.setItem("profileData", serializedState);
    } catch (error) {
        console.log(error);
    }
};

const initialState = {     
    profileData: loadState(),
    isLoading: false,     
    isError: false,     
    isSuccess: false,      
    message: "" 
};

const ProfileSlice = createSlice({  // Fixed syntax here
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(profileCreat.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(profileCreat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.profileData = action.payload;
            saveState(state.profileData);
        })
        .addCase(profileCreat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const profileCreat = createAsyncThunk(
    "profileData/profileCreat",
    async (data, {rejectWithValue }) => {    
        try {
            const response = await ProfileService.profileCreat(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const ProfileUpdatedSlice
= createAsyncThunk(
    "profileData/profileCreat",
    async (data, {rejectWithValue }) => {    
        try {
            const response = await ProfileService.ProfileUpdatedSlice(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export default ProfileSlice.reducer;