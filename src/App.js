import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyB8xAXLU_-kQhHjhol6kjSjdDx8snZcof8',
            authDomain: 'manager-1af4d.firebaseapp.com',
            databaseURL: 'https://manager-1af4d.firebaseio.com',
            projectId: 'manager-1af4d',
            storageBucket: '',
            messagingSenderId: '969011357474'
        };
        firebase.initializeApp(config);

    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        console.ignoredYellowBox = ['Setting a timer'];
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;