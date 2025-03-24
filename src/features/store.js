import { configureStore } from "@reduxjs/toolkit";
import geoLocationReducer from  "./Geo_Location/geoLocationSlice"
import userReducer from "./user/userSlice"
import TasksReducer from "./Tasks/TasksSlice";
import PolicyReducer from "./Policy/PolicySlice";
import LeaveReducer from "./LeaveManagement/LeaveSlice"
import ProfileReducer from "./Profile/ProfileSlice";
import EmployeeSlice from './Employee/EmployeeSlice'
const store = configureStore({
    reducer: {
        geoLocation:geoLocationReducer,
        user:userReducer,
        tasks:TasksReducer,
        policy:PolicyReducer,
        leave:LeaveReducer,
        profile:ProfileReducer,
        employees:EmployeeSlice
    }
});

export default store;
