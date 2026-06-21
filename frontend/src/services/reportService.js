import axios from "axios";

const API_URL = "http://localhost:4000/api/reports";

const getConfig = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return {

        headers: {
            Authorization: `Bearer ${user.token}`
        }

    };

};

export const exportVisitors = async () => {

    const response = await axios.get(

        `${API_URL}/visitors`,

        getConfig()

    );

    return response.data;

};

export const exportAppointments = async () => {

    const response = await axios.get(

        `${API_URL}/appointments`,

        getConfig()

    );

    return response.data;

};

export const exportLogs = async () => {

    const response = await axios.get(

        `${API_URL}/checklogs`,

        getConfig()

    );

    return response.data;

};