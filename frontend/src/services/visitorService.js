import axios from "axios";

const API_URL = "http://localhost:4000/api/visitors";

const getConfig = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return {

        headers: {

            Authorization: `Bearer ${user.token}`

        }

    };

};

export const getVisitors = async () => {

    const response = await axios.get(
        API_URL,
        getConfig()
    );

    return response.data;
};

export const createVisitor = async (visitorData) => {

    const response = await axios.post(
        API_URL,
        visitorData,
        getConfig()
    );

    return response.data;
};

export const deleteVisitor = async (id) => {

    const response = await axios.delete(
        `${API_URL}/${id}`,
        getConfig()
    );

    return response.data;
};