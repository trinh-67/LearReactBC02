import {combineReducers,createReducers} from "redux";

const stateDefault = {
    gioHang: [
        {maSP: 1, tenSP: 'samsumg'}
    ]
}

const rootReducer = combineReducers ({
    gioHangReducer: (state = stateDefault,action) => {
        return {...state}
    },
});

export const store = createReducers(rootReducer)