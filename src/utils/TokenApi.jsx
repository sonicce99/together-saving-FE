import axios from "axios";
import cookie from "react-cookies";

const TOKEN = cookie.load("TOKEN");

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: TOKEN },
});
