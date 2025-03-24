import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PolicyService from "./PolicyService";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("PolicyDocuments");
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
        localStorage.setItem("PolicyDocuments", serializedState);
    } catch (error) {
        console.log(error);
    }
};

const initialState = {     
    PolicyDocuments: loadState(),
    PolicyAcknowledgmentHistoryList:loadState(),
    isLoading: false,     
    isError: false,     
    isSuccess: false,      
    message: "" 
};


export const acknowledgePolicy = createAsyncThunk(
    "policy/acknowledgePolicy",
    async (docId, { rejectWithValue }) => {
        try {
            const response = await PolicyService.acknowledgePolicy(docId);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const PolicyList = createAsyncThunk(
    "PolicyDocuments/PolicyList",
    async (data, {rejectWithValue }) => {    
        try {
            const response = await PolicyService.PolicyList(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const AcknowledgmentHistoryList = createAsyncThunk(
    "PolicyAcknowledgmentHistoryList/AcknowledgmentHistoryList",
    async (data, {rejectWithValue }) => {    
        try {
            const response = await PolicyService.AcknowledgmentHistoryList(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const PolicySlice = createSlice({
    name: "policy",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(PolicyList.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(PolicyList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.PolicyDocuments = action.payload;  
            saveState(state.PolicyDocuments);       
        })
        .addCase(PolicyList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(acknowledgePolicy.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(acknowledgePolicy.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(acknowledgePolicy.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export default PolicySlice.reducer;