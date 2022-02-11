import axios from "axios";

const URL =
  window.location.hostname === "localhost" ? "/" : "http://183.99.247.17:8881";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: process.env.TOKEN },
});
