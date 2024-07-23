import axios from "axios";

export const API_BACKEND_BASIC_URI = "http://localhost:5454"

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL : API_BACKEND_BASIC_URI,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})