import {
    DATE_UPDATE,
    DATE_CREATE,
    DATE_SAVE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    name:'',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATE_UPDATE:
            return{...state, [action.payload.prop]:action.payload.value};
        case DATE_CREATE:
            return INITIAL_STATE;
        case DATE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }

};