import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import DateList from './components/DateList';
import SoftTaskCreate from './components/SoftTaskCreate';
import SoftTaskEdit from './components/SoftTaskEdit';
import MainCalendar from "./components/Calendar";
import MindEdit from './components/MindEdit';
import MindCreate from './components/MindCreate';

const RouterComponent =() => {
    return (
        <Router sceneStyle={{paddingTop: 50}}>
            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main">
                <Scene
                    key="dateList"
                    component={DateList}
                    title="Tasks1"
                    initial
                />
                <Scene component={MainCalendar}
                       key="calendar"
                       direction="vertical"
                       title="Calendar"/>
                <Scene key="taskEdit" component={TaskEdit} title="Edit task"/>
                <Scene key="taskCreate" component={TaskCreate} title="Create task" />
                <Scene key="softTaskEdit" component={SoftTaskEdit} title="Edit task"/>
                <Scene key="softTaskCreate" component={SoftTaskCreate} title="Create task" />
                <Scene key="mindEdit" component={MindEdit} title="Edit thought"/>
                <Scene key="mindCreate" component={MindCreate} title="Create thought" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;