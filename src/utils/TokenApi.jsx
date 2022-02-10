import axios from "axios";
import cookie from "react-cookies";

const Token = cookie.load("token");

const PROXY = window.location.hostname === "localhost" ? "/" : "/";
const URL = PROXY;

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: Token },
});
