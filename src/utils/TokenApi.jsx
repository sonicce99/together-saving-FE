import axios from "axios";
import cookie from "react-cookies";

const Token = cookie.load("token");

export const axiosInstance = axios.create({
  baseURL: "*",
  headers: { Authorization: Token },
});
