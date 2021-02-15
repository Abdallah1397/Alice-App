import { call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/categories';
import * as actions from '../actions/categories';
import Types from '../types/categories';

function* allCategories(){
    yield put(actions.setLoading(true));
    try{
        const result =yield call(api.getCategory);
        yield put(actions.getAllCategoriesSuccess(result));
    }catch(error){
        yield put(actions.getAllCategoriesFail());
    }finally{
        yield put(actions.setLoading(false));
    }
}

export default function* sagaCategory(){
    yield takeLatest(Types.GET_ALL_CATEGORIES_REQUEST,allCategories);
}