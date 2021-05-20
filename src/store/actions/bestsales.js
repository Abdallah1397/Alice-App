import Types from '../types/bestsales';
// Actions File => function to return actions 
export const getAllBestSalesRequest=()=>({
    type:Types.GET_ALL_BEST_SALES_REQUEST,
});

export const getAllBestSalesSuccess=(data)=>({
    type:Types.GET_ALL_BEST_SALES_SUCCESS,
    payload:data,
})

export const getAllBestSalesFail=()=>({
    type:Types.GET_ALL_BEST_SALES_FAIL,
});

export const setLoading=()=>({
    type:Types.SET_LOADING,
})