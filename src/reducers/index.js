import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskReducer from './TaskReducer';
import DateFormaReducer from './DateFormaReducer';
import DateReducer from './DateReducer';

export default combineReducers({
    auth: AuthReducer,
    taskForm: TaskFormReducer,
    tasks: TaskReducer,
    dateForm: DateFormaReducer,
    dates: DateReducer
});