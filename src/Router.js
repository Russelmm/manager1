import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
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
                    //onRight={() => Actions.employeeCreate()}
                    //rightTitle="Add"
                    onBack={() => Actions.dateList()}
                    key="employeeList"
                    component={EmployeeList}
                    title="Tasks"
                    //initial
                />
                <Scene key="dateCreate" component={DateCreate} title="Create date"/>
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit task"/>
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create task"/>



            </Scene>
        </Router>
    );
};

export default RouterComponent;