import axios from "axios";
import { toast } from 'react-toastify';
const API_URL = "/api/task";


const chats_Creat = async (data) => {
console.log(data);
const userString = localStorage.getItem('user'); 
const user = userString ? JSON.parse(userString).user_id : null; 

    const messageData = {
        sender_id: data.receiverId || receiverId,
        receiver_id: data.receiver_id || user,
        content: data.content,
        timestamp:data.timestamp
    };  
    try {
        const response = await axios.post(`${API_URL}/chats`, messageData);
        toast.success('Message sent successfully!');
        return response.data;
    } catch (error) {
        toast.error(error.message || 'Failed to send message');
        throw new Error(error.message);
    }




    try {
        const userString = localStorage.getItem('user'); 
        const user = userString ? JSON.parse(userString).user_id : null; 

        const response = await axios.post(`${API_URL}/chats`, {
            params: {
                user1:data,
                user2: user,
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}





const ChatAll = async (data) => {

    try {
        const userString = localStorage.getItem('user'); 
        const user = userString ? JSON.parse(userString).user_id : null; 

        const response = await axios.get(`${API_URL}/chats`, {
            params: {
                user1:data,
                user2: user,
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};





const UserAll = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/RegisterEmployees`, data);        
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const ChatsService ={
    chats_Creat,
    ChatAll,
    UserAll
}


export default ChatsService;