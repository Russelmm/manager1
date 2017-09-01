import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
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

export const employeeUpdate = ({prop, value}) => {
    return{
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift, dateUid}, date) => {
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/dates/${date.uid}/employees`)
            .push({name, phone, shift, dateUid})
            .then(() => {
                dispatch({type:EMPLOYEE_CREATE});
                Actions.employeeList({type: 'reset'});
            });
    };
};

export const employeesFetch =(date) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/dates/${date.uid}/employees`)
            .on('value',snapshot =>{
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
                Actions.employeeList({date: date});

            });
    };
};

export const employeeSave = ({ name, phone, shift, dateUid, uid }) => {
    const { currentUser } = firebase.auth();
    console.log(dateUid);
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/dates/${dateUid}/employees/${uid}`)
            .set({ name, phone, shift, dateUid })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeeDelete = ({ dateUid, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        //firebase.database().ref(`/users/${currentUser.uid}/dates/employees/${uid}`)
        firebase.database().ref(`/users/${currentUser.uid}/dates/${dateUid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
            });
    };
};