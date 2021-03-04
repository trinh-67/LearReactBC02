import { combineReducers, createStore} from "redux";
import {gioHangReducer} from './Reducers/GioHangReducer';



const rootReducer = combineReducers({
    gioHangReducer: gioHangReducer,
    //state theo tung nghiep vu 
});

export const store = createStore(rootReducer);