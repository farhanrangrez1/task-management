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

export const updateProjectStatus = createAsyncThunk(
  'project/updateProjectstatus',
  async ({id, status}, { rejectWithValue }) => { 
    try { 
      const response = await axios.put(`${API_URL}/projects/${id}/status`, {status}
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Error updating Project status');
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (projectId, { rejectWithValue }) => {
    try {
       await axios.delete(`${API_URL}/projects/${projectId}`);
      return projectId;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Error deleting project");
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
        state.error = null;
        state.projects = [...state.projects, action.payload];
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder
      .addCase(updateProjectStatus.fulfilled, (state, action) => {
        const index = state.projects.findIndex((project) => project.id === action.payload.id);
        if (index !== -1) {
          state.projects[index].is_active = action.payload.is_active;
        }
      } ) 


         builder
            .addCase(deleteProject.fulfilled, (state, action) => {
              state.projects = state.projects.filter((project) => project.id !== action.payload);
            });
    }

  
});

export default ProjectSlice.reducer;