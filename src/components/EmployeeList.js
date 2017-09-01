import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import { Card, CardSection, Button} from './common';
import {Actions} from 'react-native-router-flux';

class EmployeeList extends Component{
    componentWillMount(){
        this.props.employeesFetch(this.props.date);

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    onButtonPress(){
        Actions.employeeCreate({date: this.props.date})
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render(){

        return(
            <View>
                <CardSection>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}
                    >
                        Add Task
                    </Button>
                </CardSection>


            </View>

        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};

export default connect(mapStateToProps, {employeesFetch}) (EmployeeList);