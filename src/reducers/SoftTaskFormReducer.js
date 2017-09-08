import {
    SOFTTASK_UPDATE,
    SOFTTASK_CREATE,
    SOFTTASK_SAVE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    name:'',
    phone: '',
    shift: '',
    dateName: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SOFTTASK_UPDATE:
            return{...state, [action.payload.prop]:action.payload.value};
        case SOFTTASK_CREATE:
            return INITIAL_STATE;
        case SOFTTASK_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }

};