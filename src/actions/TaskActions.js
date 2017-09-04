import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    TASK_UPDATE,
    TASK_CREATE,
    TASKS_FETCH_SUCCESS,
    TASK_SAVE_SUCCESS,
    DATE_CREATE,
    DATES_FETCH_SUCCESS,
    DATE_UPDATE
} from './types';

export const dateCreate = ({name}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/dates`)
            .push({name})
            .then(() => {
                dispatch({type:DATE_CREATE});
                Actions.dateList({type: 'reset'});
            });
    };
};

export const dateUpdate = ({prop, value}) => {
    return{
        type: DATE_UPDATE,
        payload: {prop, value}
    };
};

export const datesFetch =() => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/dates`)
            .on('value',snapshot =>{
                dispatch({type: DATES_FETCH_SUCCESS, payload: snapshot.val()});

            });
    };
};

export const taskUpdate = ({prop, value}) => {
    return{
        type: TASK_UPDATE,
        payload: {prop, value}
    };
};

export const taskCreate = ({name, phone, shift, dateUid}, date) => {
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/dates/${date.uid}/tasks`)
            .push({name, phone, shift, dateUid})
            .then(() => {
                dispatch({type:TASK_CREATE});
                Actions.taskList({type: 'reset'});
            });
    };
};

export const tasksFetch =(date) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/dates/${date.uid}/tasks`)
            .on('value',snapshot =>{
                dispatch({type: TASKS_FETCH_SUCCESS, payload: snapshot.val()});
                Actions.taskList({date: date});

            });
    };
};

export const taskSave = ({ name, phone, shift, dateUid, uid }) => {
    const { currentUser } = firebase.auth();
    console.log(dateUid);
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/dates/${dateUid}/tasks/${uid}`)
            .set({ name, phone, shift, dateUid })
            .then(() => {
                dispatch({ type: TASK_SAVE_SUCCESS });
                Actions.taskList({ type: 'reset' });
            });
    };
};

export const taskDelete = ({ dateUid, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        //firebase.database().ref(`/users/${currentUser.uid}/dates/employees/${uid}`)
        firebase.database().ref(`/users/${currentUser.uid}/dates/${dateUid}/tasks/${uid}`)
            .remove()
            .then(() => {
                Actions.taskList({ type: 'reset' });
            });
    };
};