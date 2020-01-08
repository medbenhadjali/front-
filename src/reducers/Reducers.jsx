import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';

console.log(ProductReducer);

export default combineReducers({
    product: ProductReducer ,
    user:UserReducer
});

