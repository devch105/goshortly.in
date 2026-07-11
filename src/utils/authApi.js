import axios from "axios";
import { API_BASE_URL } from "./apiEndpoints";

const authApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
    },
   });

authApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);
export default authApi;

