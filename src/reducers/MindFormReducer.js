import {
    MIND_UPDATE,
    MIND_CREATE,
    MIND_SAVE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    description:'',
    dateName: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MIND_UPDATE:
            return{...state, [action.payload.prop]:action.payload.value};
        case MIND_CREATE:
            return INITIAL_STATE;
        case MIND_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }

};