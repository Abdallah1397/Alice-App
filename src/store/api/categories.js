import axios from "axios";

export const getCategory=()=>{
    return axios.get("http://localhost:3000/category");
};