import { combineReducers } from "redux";
import categoryReducer from './categories';
import bestSalesReducer from './bestsale';
const rootReducer=combineReducers({
    allCategories:categoryReducer,
    allBestSales:bestSalesReducer,
});
export default rootReducer;