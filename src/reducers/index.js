import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskReducer from './TaskReducer';
import SoftTaskReducer from './SoftTaskReducer';
import SoftTaskFormReducer from './SoftTaskFormReducer';
import MindReducer from './MindReducer';
import MindFormReducer from './MindFormReducer';

export default combineReducers({
    auth: AuthReducer,
    taskForm: TaskFormReducer,
    tasks: TaskReducer,
    softTaskForm: SoftTaskFormReducer,
    softTasks: SoftTaskReducer,
    minds: MindReducer,
    mindForm: MindFormReducer
});