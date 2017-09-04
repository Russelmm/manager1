import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import DateList from './components/DateList';
import DateCreate from './components/DateCreate';

const RouterComponent =() => {
    return (
        <Router sceneStyle={{paddingTop: 50}}>
            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main" >
                <Scene
                    onRight={() => Actions.dateCreate()}
                    rightTitle="Add"
                    key="dateList"
                    component={DateList}
                    title="Date"
                    initial
                />
                <Scene
                    //onRight={() => Actions.taskCreate()}
                    //rightTitle="Add"
                    onBack={() => Actions.dateList()}
                    key="taskList"
                    component={TaskList}
                    title="Tasks"
                    //initial
                />
                <Scene key="dateCreate" component={DateCreate} title="Create date"/>
                <Scene key="taskEdit" component={TaskEdit} title="Edit task"/>
                <Scene key="taskCreate" component={TaskCreate} title="Create task"/>



            </Scene>
        </Router>
    );
};

export default RouterComponent;