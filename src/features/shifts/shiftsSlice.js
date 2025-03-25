import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  shiftList: [],
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};

// Thunk to fetch shifts from the API
export const fetchShifts = createAsyncThunk("shifts/fetchShifts", async () => {
  const response = await axios.get(
    "https://projectmanagement-employe-1.onrender.com/shifts"
  );
  return response.data; // Adjust according to your actual response format
});

// Create a slice of the state
const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShifts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShifts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shiftList = action.payload; // Assign fetched data to state
      })
      .addCase(fetchShifts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default shiftsSlice.reducer;
