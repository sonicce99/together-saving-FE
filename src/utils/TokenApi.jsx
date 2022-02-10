import axios from "axios";
import cookie from "react-cookies";

const TOKEN = cookie.load("TOKEN");

const URL =
  window.location.hostname === "localhost" ? "/" : "http://183.99.247.17:8881";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: TOKEN },
});
