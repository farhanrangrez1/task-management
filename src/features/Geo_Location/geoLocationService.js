import axios from "axios";

const API_URL = "/api/geo";  // Changed from "/api/geo/api"

const LatestLocactionAll = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/api/get_location_data`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const SetGeophenceAdd = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/api/set_geofence`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const GetEmployeStatusList = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/api/get_location_data`,data,
            {
                params: { 
                    employname: "Aditya123",
                    date:"2025-03-11",
                    ...data
                }
            }
        )
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const LatestLocactionList = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/api/latest_location?employeeID=`,data);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const GetEmployeStatusDelete = async(id) => {
    console.log(id);
    try {
        const response = await axios.delete(`${API_URL}/api/delete_location_data/${id}`);
        return response.data; 
    } catch (error) {
        throw new Error(error.message);
    }
};

const geoLocationService = {
    LatestLocactionAll,
    SetGeophenceAdd,
    GetEmployeStatusList,
    LatestLocactionList,
    GetEmployeStatusDelete
};

export default geoLocationService;