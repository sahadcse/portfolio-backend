import axios from "axios"
import { BASE_URL } from "../../utils/staticData"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 500000,
    headers: {"Content-Type": "application/json"}
})

axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = localStorage.getItem('token')

        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config;
    },
    (error)=>{
        console.error("Error Axios Interceptors Request: ", error)
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response)=> response,
    (error)=>{
        if(error.response && error.response.status == 401){
            localStorage.clear();
            console.error("Unauthorize! Redirecting to Login")
            window.location.href = "/login"
        }
    }
)

export default axiosInstance;























// axiosInstance.interceptors.request.use(
//     (config) =>{
//         const accessToken = localStorage.getItem("token");

//         if(accessToken){
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error)=>{
//         console.log("Error in axiosInstance Interceptors", error)
//         return Promise.reject(error)
//     }
// )

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error)=>{
//         if(error.response && error.response.status === 401){
//             localStorage.clear();
//             console.log("Unauthorzed Redirecting To Login")
//             window.location.href= "/login"
//         }
//     }
// )