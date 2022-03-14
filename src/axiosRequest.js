import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "http://localhost:5100/",
  withCredentials: true,
});

export default axiosRequest;
