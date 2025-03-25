import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Base URL
const API_URL = '/api/task';

// Initial state
const initialState = {
  employees: [],
  loading: false,
  error: null,
};



// Create Employee
export const createEmployee = createAsyncThunk(
  'employee/createEmployee',
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, employeeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Error creating employee');
    }
  }
);

// Get All Employees
export const getEmployees = createAsyncThunk(
  'employee/getEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/RegisterEmployees`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Error fetching employees');
    }
  }
);

// Update Employee
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (updatedEmployee, { rejectWithValue }) => {
    try {
      // API endpoint with employee ID for updating the correct user
      const response = await axios.put(
        `${API_URL}/employees/${updatedEmployee.id}`,
        updatedEmployee
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error updating employee"
      );
    }
  }
);

// Update Employee Status (Activate/Deactivate)
export const updateEmployeeStatus = createAsyncThunk(
  'employee/updateEmployeeStatus',
  async ({ id, is_active }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/employees/${id}/update_status`, {
        is_active,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Error updating employee status');
    }
  }
);

// Delete Employee
export const deleteEmployee = createAsyncThunk(
  'employee/deleteEmployee',
  async (employeeId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/employees/${employeeId}`);
      return employeeId;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Error deleting employee');
    }
  }
);

const EmployeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Employee
    builder
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Get All Employees
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update Employee
    builder
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      });

    // Update Employee Status
    builder
      .addCase(updateEmployeeStatus.fulfilled, (state, action) => {
        const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index].is_active = action.payload.is_active;
        }
      });

    // Delete Employee
    builder
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter((emp) => emp.id !== action.payload);
      });
  },
});

export default EmployeeSlice.reducer;
