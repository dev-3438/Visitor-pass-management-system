import axios from "axios";

const API_URL = "http://localhost:4000/api/checklogs";

const getConfig = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return {

        headers: {
            Authorization: `Bearer ${user.token}`
        }

    };

};

export const getLogs = async () => {

    const response = await axios.get(
        API_URL,
        getConfig()
    );

    return response.data;

};

export const checkOutVisitor = async (id) => {

    const response = await axios.put(

        `${API_URL}/checkout/${id}`,

        {},

        getConfig()

    );

    return response.data;

};