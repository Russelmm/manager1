import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    SOFTTASK_UPDATE,
    SOFTTASK_CREATE,
    SOFTTASKS_FETCH_SUCCESS,
    SOFTTASK_SAVE_SUCCESS
} from './types';

export const softTaskUpdate = ({prop, value}) => {
    return{
        type: SOFTTASK_UPDATE,
        payload: {prop, value}
    };
};

export const softTaskCreate = ({name, phone, shift, dateName}, date) => {
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/softtasks`)
            .push({name, phone, shift, dateName})
            .then(() => {
                dispatch({type:SOFTTASK_CREATE});
                Actions.dateList({date: date});
            });
    };
};

export const softTaskFetch =(date) => {
    const {currentUser} = firebase.auth();

    let playersRef = firebase.database() .ref(`/users/${currentUser.uid}/softtasks`);

    return (dispatch) => {
        playersRef.orderByChild("dateName") .equalTo(date).on('value',snapshot =>{
            dispatch({type: SOFTTASKS_FETCH_SUCCESS, payload: snapshot.val()});
            //Actions.dateList({type: 'reset'});
        });
    };
};

export const softTaskSave = ({ name, phone, shift, dateName, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/softtasks/${uid}`)
            .set({ name, phone, shift, dateName })
            .then(() => {
                dispatch({ type: SOFTTASK_SAVE_SUCCESS });
                Actions.dateList({ date: dateName });
            });
    };
};

export const softTaskDelete = ({ uid, dateName }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/softtasks/${uid}`)
            .remove()
            .then(() => {
                Actions.dateList({ date: dateName });
            });
    };
};