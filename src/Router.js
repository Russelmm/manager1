import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent =() => {
    return (
        <Router sceneStyle={{paddingTop: 50}}>
            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="login pls" />
            </Scene>
            <Scene key="main" >
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create"/>
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit"/>


            </Scene>
        </Router>
    );
};

export default RouterComponent;