import axios from "axios";

const API_ROOT = "https://frontend-take-home-service.fetch.com";

const axiosAPI = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
});

export default axiosAPI;
