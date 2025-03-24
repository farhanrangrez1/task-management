import axios from "axios";

const API_URL = "/api/task";

const LeaveCreat = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const employee_id = localStorage.getItem('user_id');

        const response = await axios.post(
            `${API_URL}/leave/requests`,
            { ...data, employee_id },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
}

const GetLeaveBalance = async (data) => {
    const token = localStorage.getItem('token');
    const employee_id = localStorage.getItem('user_id');
    try {
        const response = await axios.get(
            `${API_URL}/leave/balance`,
            {
                headers: {
                    'Authorization':`Bearer ${token}`
                },
                params: { 
                    employee_id: employee_id,
                    ...data
                }
            }
        );
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const RecentLeaveRequestsList = async (data) => {
    const employee_id = localStorage.getItem('user_id');
    try {
        const response = await axios.get(
            `${API_URL}/leave/requests`,
            {
                params: { 
                    employee_id: employee_id,
                }
            }
        );
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};


const LeaveService={
    LeaveCreat,
    GetLeaveBalance,
    RecentLeaveRequestsList
}

export default LeaveService