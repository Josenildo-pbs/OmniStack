import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.3.40:3333"
});

export default api;
