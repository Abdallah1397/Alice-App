import axios from 'axios';

// get data by axios 
export const getOurWork=()=>{
    return axios.get('./data.json');
}