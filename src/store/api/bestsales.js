import axios from "axios";

// data.json as endpoints
export const getBestSales=()=>{
    return axios.get("./data.json");
};