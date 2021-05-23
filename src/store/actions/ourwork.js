import Types from '../types/ourwork';

export const getOurWorkRequest=()=>({
    type:Types.GET_OUR_WORK_REQUEST,
});

export const getOurWorkSuccess=(data)=>({
    type:Types.GET_OUR_WORK_SUCCESS,
    payload:data,
});

export const getOurWorkFail=()=>({
    type:Types.GET_OUR_WORK_FAIL,
});

export const setLoading=()=>({
    type:Types.SET_LOADING,
});