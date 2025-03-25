import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ChatsService from "./ChatsService";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("chatsArr");
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
        localStorage.setItem("chatsArr", serializedState);
    } catch (error) {
        console.log(error);
    }
};

const initialState = {     
    chatsArr: loadState(),
    AllUser:loadState(),
    isLoading: false,     
    isError: false,     
    isSuccess: false,      
    message: "" 
};

const ChatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
        .addCase(ChatAll.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(ChatAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.chatsArr = action.payload;
            saveState(state.chatsArr);
        })
        .addCase(ChatAll.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // UserAll

        .addCase(UserAll.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(UserAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.AllUser = action.payload;
            saveState(state.AllUser);
        })
        .addCase(UserAll.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});


export const chats_Creat = createAsyncThunk(
    "chatsArr/profileCreat",
    async (data, {rejectWithValue }) => {            
        try {
            const response = await ChatsService.chats_Creat(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const ChatAll = createAsyncThunk(
    "chatsArr/ChatAll",
    async (data, {rejectWithValue }) => {            
        try {
            const response = await ChatsService.ChatAll(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const UserAll = createAsyncThunk(
    "AllUser/UserAll",
    async (data, {rejectWithValue }) => {    
        try {
            const response = await ChatsService.UserAll(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


export default ChatsSlice.reducer;
