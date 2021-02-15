import {fork} from 'redux-saga/effects';
import sagaCategory from './categories';

export default function* rootSaga(){
    yield fork(sagaCategory);
}