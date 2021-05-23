import {call,takeLatest,put} from 'redux-saga/effects';
import * as api from '../api/ourwork.js';
import * as actions from '../actions/ourwork';
import Types from '../types/ourwork';

function* ourWork(){
    yield put(actions.setLoading(true));
    try{
        const result =yield call(api.getOurWork);
        yield put(actions.getOurWorkSuccess(result));
    }catch(error){
        yield put(actions.getOurWorkFail());
    }finally{
        yield put(actions.setLoading(false));
    }
} 

export default function* ourworkSaga(){
    yield takeLatest(Types.GET_OUR_WORK_REQUEST,ourWork);
}


