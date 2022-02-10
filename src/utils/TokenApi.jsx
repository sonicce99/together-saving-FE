import axios from "axios";
import cookie from "react-cookies";

const Token = cookie.load("token");

const URL = window.location.hostname === "localhost" ? "/" : "/api";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: Token },
});
