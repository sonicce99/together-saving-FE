import axios from "axios";
import cookie from "react-cookies";

const TOKEN = cookie.load("TOKEN");

export const axiosInstance = axios.create({
  baseURL: "http://183.99.247.17:8881",
  headers: { Authorization: TOKEN },
});
