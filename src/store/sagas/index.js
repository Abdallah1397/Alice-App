import {fork} from 'redux-saga/effects';
import sagaCategory from './categories';
import sagaBestSales from './bestsales';
import sagaOurWork from './ourwork';
export default function* rootSaga(){
    yield fork(sagaCategory);
    yield fork(sagaBestSales);
    yield fork(sagaOurWork);
}