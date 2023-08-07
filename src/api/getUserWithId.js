
import http from "./axiosInstance"


export const getUserWithId = (id) => {
    console.log(id)
    return http.get(id)
}