import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    TASK_UPDATE,
    TASK_CREATE,
    TASKS_FETCH_SUCCESS,
    TASK_SAVE_SUCCESS
} from './types';

export const taskUpdate = ({prop, value}) => {
    return{
        type: TASK_UPDATE,
        payload: {prop, value}
    };
};

export const taskCreate = ({name, phone, shift, dateName}, date) => {
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .push({name, phone, shift, dateName})
            .then(() => {
                dispatch({type:TASK_CREATE});
                Actions.dateList({date: date});
            });
    };
};

export const tasksFetch =(date) => {
    const {currentUser} = firebase.auth();

    let playersRef = firebase.database() .ref(`/users/${currentUser.uid}/tasks`);

    return (dispatch) => {
        playersRef.orderByChild("dateName") .equalTo(date).on('value',snapshot =>{
            dispatch({type: TASKS_FETCH_SUCCESS, payload: snapshot.val()});
            //Actions.dateList({type: 'reset'});
        });
    };
};

export const taskSave = ({ name, phone, shift, dateName, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .set({ name, phone, shift, dateName })
            .then(() => {
                dispatch({ type: TASK_SAVE_SUCCESS });
                Actions.dateList({ date: dateName });
            });
    };
};

export const taskDelete = ({ uid, dateName }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .remove()
            .then(() => {
                Actions.dateList({ date: dateName });
            });
    };
};