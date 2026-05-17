import axios from "axios";

const Api = axios.create({
  baseURL: VITE_API_URL,
  timeout: " 50000",
});

export default Api;
