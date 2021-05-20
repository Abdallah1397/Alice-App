import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/bestsales';
import * as actions from '../actions/bestsales';
import Types from '../types/bestsales';

function* allBestSales(){
    yield put(actions.setLoading(true));
    try{
        const result=yield call(api.getBestSales);
        console.log(result,"saga")

        yield put(actions.getAllBestSalesSuccess(result));
    }catch(error){
        yield put(actions.getAllBestSalesFail());
    }finally{
        yield put(actions.setLoading(false));
    }
}

export default function* sagaBestSales(){
    yield takeLatest(Types.GET_ALL_BEST_SALES_REQUEST,allBestSales);
}