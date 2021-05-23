import Types from '../types/ourwork';

const INITAL_STATE={
    ourWork:[],
    loading:false,
};
// function that return the data standed of th
export default function ourWork(state=INITAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_OUR_WORK_SUCCESS:{
            return{
                ...state,
                ourWork:payload.data.ourWork,
                loading:false,
            };
        }
        case Types.GET_OUR_WORK_FAIL:{
            return{
                ...state,
                ourWork:[],
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