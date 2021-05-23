import { combineReducers } from "redux";
import categoryReducer from './categories';
import bestSalesReducer from './bestsale';
import ourWorkReducer from './ourwork';
const rootReducer=combineReducers({
    allCategories:categoryReducer,
    allBestSales:bestSalesReducer,
    ourWork:ourWorkReducer,
});
export default rootReducer;