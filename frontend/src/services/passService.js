import axios from "axios";

const API_URL = "http://localhost:4000/api/passes";

const getConfig = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
};

export const getPasses = async () => {

    const response = await axios.get(
        API_URL,
        getConfig()
    );

    return response.data;
};

export const createPass = async (passData) => {

    const response = await axios.post(
        API_URL,
        passData,
        getConfig()
    );

    return response.data;
};