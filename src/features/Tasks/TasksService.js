import { asCleanDays } from "@fullcalendar/core/internal";
import axios from "axios";

const API_URL = "/api/task";

const TasksList = async(data)=> {
    try {
        const response = await axios.get(`${API_URL}/tasks/get_tasks`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
    
}
const taskscreate = async(data)=> {
    try {
        const response = await axios.post(`${API_URL}/tasks`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
}

const tasksDelete = async(data)=> {
    console.log(data)
    try {
        const response = await axios.delete(
            `${API_URL}/tasks/${data}`,
            { ...data,},
        );
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
}

const updateTasks =async(data)=> {
    try {
        const response = await axios.put(
            `${API_URL}/tasks/${data.id}`,
            { ...data,},
        );
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
}


const TasksService={
TasksList,
taskscreate,
tasksDelete,
updateTasks
}


export default  TasksService;