import axios from "axios";

const token = localStorage.getItem("token")

if (!token) {
    console.warn("Token não encontrado no localStorage");
}

const api = axios.create({
    baseURL: "https://api-node-youtube-clone-conta.onrender.com",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        
    }
})

export default api;