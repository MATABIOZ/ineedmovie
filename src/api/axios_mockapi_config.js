import axios from "axios";
export const axiosMockapiInstance = axios.create({
    baseURL: process.env.REACT_APP_MOCKAPI_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
