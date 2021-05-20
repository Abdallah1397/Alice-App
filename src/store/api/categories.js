import axios from "axios";

// data.json as endpoints
export const getCategory=()=>{
    return axios.get("./data.json");
};