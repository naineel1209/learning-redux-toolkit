import {getAccUserFulFilled, getAccUserPending, getAccUserRejected, incByAmt, inc, dec, } from "../actions/index.js";


export function reducerFunc( state = {amount: 100}, action ) {
    switch ( action.type ) {
        case getAccUserFulFilled:
            return { amount: action.payload, pending: false };
        case getAccUserRejected:
            return { ...state, error: action.error, pending: false };
        case getAccUserPending:
            return { ...state, pending: true };
        case inc:
            return { amount: state.amount + 1 };
        case dec:
            return { amount: state.amount - 1 };
        case incByAmt:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}
