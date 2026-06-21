import axios from "axios";

const API_URL = "http://localhost:4000/api/appointments";

const getConfig = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return {

        headers: {
            Authorization: `Bearer ${user.token}`
        }

    };

};

export const getAppointments = async () => {

    const response = await axios.get(
        API_URL,
        getConfig()
    );

    return response.data;

};

export const createAppointment = async (appointmentData) => {

    const response = await axios.post(
        API_URL,
        appointmentData,
        getConfig()
    );

    return response.data;

};

export const approveAppointment = async (id) => {

    const response = await axios.put(

        `${API_URL}/${id}`,

        {
            status: "Approved"
        },

        getConfig()

    );

    return response.data;

};