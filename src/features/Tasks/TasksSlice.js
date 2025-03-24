import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TasksService from "./TasksService";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("Alltasks");
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
        localStorage.setItem("Alltasks", serializedState);
    } catch (error) {
        console.log(error);
    }
};

const initialState = {     
    tasksOverviewAll: loadState(),
    isLoading: false,     
    isError: false,     
    isSuccess: false,      
    message: "" 
};

const TasksSlice = createSlice({ 
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         // TasksList
      .addCase(TasksList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(TasksList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Location = action.payload;  
        saveState(state.Location);
      })
      .addCase(TasksList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    }
});

export const TasksList = createAsyncThunk(
    "tasksOverviewAll/TasksList",
    async (data, {rejectWithValue }) => {    
      try {
        const response = await TasksService.TasksList(data);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const taskscreate = createAsyncThunk(
    "tasksOverviewAll/TasksList",
    async (data, {rejectWithValue }) => {          
      try {
        const response = await TasksService.taskscreate(data);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const tasksDelete = createAsyncThunk(
    "tasksOverviewAll/tasksDelete",
    async (id, {rejectWithValue }) => {          
      try {
        const response = await TasksService.tasksDelete(id);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const updateTasks = createAsyncThunk(
    "tasksOverviewAll/getTasks",
    async (data, {rejectWithValue }) => {                
      try {
        const response = await TasksService.updateTasks(data);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
export const { } = TasksSlice.actions;
export default TasksSlice.reducer;  