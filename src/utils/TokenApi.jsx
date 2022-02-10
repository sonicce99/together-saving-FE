import axios from "axios";
import cookie from "react-cookies";

const TOKEN = cookie.load("TOKEN");

const URL = window.location.hostname === "localhost" ? "" : "/proxy";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: TOKEN },
});
