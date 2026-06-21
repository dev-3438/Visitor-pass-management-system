import axios from "axios";

const API_URL = "http://localhost:4000/api/dashboard";

export const getDashboardStats = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const config = {

        headers: {
            Authorization: `Bearer ${user.token}`
        }

    };

    const response = await axios.get(
        API_URL,
        config
    );

    return response.data;
};