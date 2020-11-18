import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "http://unit4-bw.herokuapp.com"
  });
};