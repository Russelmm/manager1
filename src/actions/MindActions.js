import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    MIND_UPDATE,
    MIND_CREATE,
    MINDS_FETCH_SUCCESS,
    MIND_SAVE_SUCCESS
} from './types';

export const mindUpdate = ({prop, value}) => {
    return{
        type: MIND_UPDATE,
        payload: {prop, value}
    };
};

export const mindCreate = ({description, dateName}, date) => {
    const {currentUser} = firebase.auth();

    return(dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/minds`)
            .push({description, dateName})
            .then(() => {
                dispatch({type:MIND_CREATE});
                Actions.dateList({date: date});
            });
    };
};

export const mindsFetch =(date) => {
    const {currentUser} = firebase.auth();

    let playersRef = firebase.database() .ref(`/users/${currentUser.uid}/minds`);

    return (dispatch) => {
        playersRef.orderByChild("dateName") .equalTo(date).on('value',snapshot =>{
            dispatch({type: MINDS_FETCH_SUCCESS, payload: snapshot.val()});
            //Actions.dateList({type: 'reset'});
        });
    };
};

export const mindSave = ({ description, dateName, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/minds/${uid}`)
            .set({ description, dateName })
            .then(() => {
                dispatch({ type: MIND_SAVE_SUCCESS });
                Actions.dateList({ date: dateName });
            });
    };
};

export const mindDelete = ({ uid, dateName }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/minds/${uid}`)
            .remove()
            .then(() => {
                Actions.dateList({ date: dateName });
            });
    };
};