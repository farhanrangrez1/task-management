import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Ensure axios is imported

const API_URL = '/api/task';

const initialState = {     
  projects: [],
  loading: false,
  error: null,
};

// Fetch projects from API
export const getProjects = createAsyncThunk(
  "project/getProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/projects`);
      console.log("Project list:", response); 
      return response.data;
    // Ensure we return only the data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProject = createAsyncThunk(
  "project/createProject",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/projects`, projectData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Error creating project");
    }
  }
);

const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;

      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProjectSlice.reducer;