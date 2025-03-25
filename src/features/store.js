import { configureStore } from "@reduxjs/toolkit";
import geoLocationReducer from  "./Geo_Location/geoLocationSlice"
import userReducer from "./user/userSlice"
import TasksReducer from "./Tasks/TasksSlice";
import shiftsReducer from "./shifts/shiftsSlice";
import PolicyReducer from "./Policy/PolicySlice";
import LeaveReducer from "./LeaveManagement/LeaveSlice"
import ProfileReducer from "./Profile/ProfileSlice";
import EmployeeSlice from './Employee/EmployeeSlice'
import ChatsReducer from "./Chats/ChatsSlice";
import ProjectSlice from "./Project/ProjectSlice";
const store = configureStore({
    reducer: {
        geoLocation:geoLocationReducer,
        user:userReducer,
        tasks:TasksReducer,
         shifts: shiftsReducer,
        policy:PolicyReducer,
        leave:LeaveReducer,
        profile:ProfileReducer,
        employees:EmployeeSlice,
        chats:ChatsReducer,
        projects:ProjectSlice,
    }
});

export default store;
