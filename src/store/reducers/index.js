import { combineReducers } from "redux";
import categoryReducer from './categories';

const rootReducer=combineReducers({
    allCategories:categoryReducer,
});
export default rootReducer;