import http from "./axiosInstance";

export const loginUser = (body) => {
  return http.post("api/login", JSON.stringify(body));
};
