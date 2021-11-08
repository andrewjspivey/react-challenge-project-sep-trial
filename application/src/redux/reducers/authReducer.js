import { LOGIN, LOGOUT, ERROR } from '../actions/types'

const INITIAL_STATE = { 
    email: null, 
    token: null,
    error: null 
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, email: action.payload.email, token: action.payload.token }
        case LOGOUT:
            return { ...state, ...INITIAL_STATE }
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}