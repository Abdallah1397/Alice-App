import {fork} from 'redux-saga/effects';
import sagaCategory from './categories';
import sagaBestSales from './bestsales';
export default function* rootSaga(){
    yield fork(sagaCategory);
    yield fork(sagaBestSales);
}