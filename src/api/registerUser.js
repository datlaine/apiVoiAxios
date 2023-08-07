import http from "./axiosInstance";

export const registerUser = (body) => {
    return  http.post('api/register', JSON.stringify(body))
}