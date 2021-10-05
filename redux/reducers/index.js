import {combineReducers} from 'redux';
import CartReducer from './CartReducer';

let Reducers=combineReducers({
    cart:CartReducer
});

const RootReducer=(state,action)=>{
return Reducers(state,action);
}

export default RootReducer;