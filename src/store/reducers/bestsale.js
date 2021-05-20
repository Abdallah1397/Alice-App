import Types from '../types/bestsales';
// define global state
const INITIAL_STATE={
    bestsales:[],
    loading:false,
};


export default function allBestSales(state=INITIAL_STATE,action){
    const{type,payload}=action;
    switch(type){
        case Types.GET_ALL_BEST_SALES_SUCCESS:{
            return{
                ...state,
                bestsales:payload.data.bestsales,
                loading:false,
            }

        }
        case Types.GET_ALL_BEST_SALES_FAIL:{
            return{
                ...state,
                bestsales:[],
                loading:true,
            };
        }
        case Types.SET_LOADING:{
            return{
                ...state,
                loading:true,
            };
        }
        default:{
            return{
                ...state,
            };
        }
    }
}
