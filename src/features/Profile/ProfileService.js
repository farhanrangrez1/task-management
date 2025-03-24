import axios from "axios";
import { toast } from 'react-toastify';
const API_URL = "/api/task";



const profileCreat = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/personal_info`, data);
        toast.success('Profile information updated successfully!');
        return response.data;
    } catch (error) {
        toast.error(error.message || 'Failed to update profile information');
        throw new Error(error.message);
    }
}

const ProfileUpdatedSlice = async (data) => {
    const employee_id = localStorage.getItem('user_id');
    try {
        const response = await axios.get(
            `${API_URL}/personal_info`,
            {
                params: { 
                    employee_id: employee_id,
                    ...data
                }
            }
        );
        toast.success('Profile information updated successfully!');
        return response.data; 
    } catch (error) {
        toast.error(error.message || 'Failed to update profile information');
        throw new Error(error.message);
    }
}
const ProfileService ={
    profileCreat,
    ProfileUpdatedSlice

}


export default ProfileService;