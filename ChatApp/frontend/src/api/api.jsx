import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:5001/chatapp-7e946/us-central1/app/api/",
  withCredentials: true,
});
