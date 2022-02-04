import axios from "axios";
import cookie from "react-cookies";

const Token = cookie.load("token");

export const axiosInstance = axios.create({
  baseURL: "/",
  headers: { Authorization: Token },
  // proxy: {
  //   protocol: "http",
  //   host: "183.99.247.17",
  //   port: 8881,
  // },
});
