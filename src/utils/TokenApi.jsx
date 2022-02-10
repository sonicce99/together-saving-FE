import axios from "axios";
import cookie from "react-cookies";

const Token = cookie.load("token");

// const PROXY = window.location.hostname === "localhost" ? "/" : "/proxy";
// const URL = PROXY;

export const axiosInstance = axios.create({
  baseURL: "/",
  headers: { Authorization: Token },
});
