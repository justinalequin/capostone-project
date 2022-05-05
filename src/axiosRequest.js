import axios from "axios";

const axiosRequest = axios.create({
  baseURL:
    process.env.REACT_APP_AXIOS === "development"
      ? "http://localhost:5100/api"
      : "/api",
  withCredentials: true,
});

export default axiosRequest;
