import {
    DATE_FETCH_SUCCESS, DATES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case DATES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};