import {
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE
} from '../actions/types';

const initialState = {
    orders: [],
    error: ""
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
            };
        case FETCH_ORDERS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default orderReducer