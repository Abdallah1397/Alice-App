import Types from '../types/categories';
// Actions File => function to return actions 
export const getAllCategoriesRequest=()=>({
    type:Types.GET_ALL_CATEGORIES_REQUEST,
});

export const getAllCategoriesSuccess=(data)=>({
    type:Types.GET_ALL_CATEGORIES_SUCCESS,
    payload: data,
});

export const getAllCategoriesFail=()=>({
    type:Types.GET_ALL_CATEGORIES_FAIL,
});

export const setLoading=()=>({
    type:Types.SET_LOADING,
});