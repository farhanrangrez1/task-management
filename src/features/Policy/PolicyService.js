import axios from "axios";

const API_URL = "/api/task";



const PolicyList =async(data)=>{
    try {
        const response = await axios.get(`${API_URL}/policy/documents`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
}

const AcknowledgmentHistoryList =async(data)=>{
    try {
        const response = await axios.get(`${API_URL}/policy/acknowledgements?user_id=5`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
}

const PolicyService={
PolicyList,
AcknowledgmentHistoryList
}


export default PolicyService