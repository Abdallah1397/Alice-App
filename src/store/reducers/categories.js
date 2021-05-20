import Types from '../types/categories';

const INITAL_STATE={
    categories:[],
    loading:false,
};

export default function allCategories(state=INITAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_ALL_CATEGORIES_SUCCESS:{
            return{
                ...state,
                categories:payload.data.category,
                loading:false,
            };
        }
        case Types.GET_ALL_CATEGORIES_FAIL:{
            return{
                ...state,
                categories:[],
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