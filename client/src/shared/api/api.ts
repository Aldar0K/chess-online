import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_BASE_URL || "/api";

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
