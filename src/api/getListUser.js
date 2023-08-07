import http from "./axiosInstance"

const getListUser = (linkApi) => {
    return http.get(linkApi)
}

export default getListUser