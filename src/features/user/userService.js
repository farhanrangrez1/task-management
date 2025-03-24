import axios from "axios";
import { toast } from 'react-toastify';

const API_URL = "/api/task";

const LoginFrom = async(data) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, data);
        console.log("login",response.data)
        if(response.data.role) {
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data) );
            
            toast.success('Login successful!');

            if(response.data.role === 'admin') {
                window.location.href = '/admin';
            } else if(response.data.role === 'employee') {
                window.location.href = '/employee';
            }
        }
        return response.data;
    } catch (error) {
        let errorMessage = 'Login failed';
        
        if (error.response) {
            errorMessage = error.response.data.message || 'Invalid credentials';
        } else if (error.request) {
            errorMessage = 'Network error. Please check your connection.';
        }
        
        toast.error(errorMessage);
        
        return {
            success: false,
            message: errorMessage
        };
    }
}

const userService = {
    LoginFrom
}

export default userService