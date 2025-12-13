import axios from "axios";

const token = localStorage.getItem("token")

if (!token) {
    console.warn("Token não encontrado no localStorage");
}

const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        
    }
})

export default api;