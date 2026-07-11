import axios from "axios";
import { API_BASE_URL } from "./apiEndpoints";

const privateApi = axios.create({
    baseURL: API_BASE_URL,
    headers : {
        "Content-Type" : "application/json",
        Accept:"application/json",
    },
});

privateApi.interceptors.request.use(

    (config) => {
        const token = localStorage.getItem("token");

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => Promise.reject(error)
);

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("Network Error");
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 401:
        localStorage.removeItem("token");
        window.location.href = "/login";
        break;

      case 403:
        console.error("Forbidden");
        break;

      case 404:
        console.error("Not Found");
        break;

      case 500:
        console.error("Internal Server Error");
        break;

      default:
        console.error(error.response.data?.message);
    }

    return Promise.reject(error);
  }
);

export default privateApi;