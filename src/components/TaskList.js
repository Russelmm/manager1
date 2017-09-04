import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View} from 'react-native';
import {tasksFetch} from '../actions';
import ListItem from './ListItem';
import { Card, CardSection, Button} from './common';
import {Actions} from 'react-native-router-flux';

class TaskList extends Component{
    componentWillMount(){

        this.props.tasksFetch(this.props.date);

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({tasks}){

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(tasks);
        console.log('///////////////////////// '+ this.dataSource);
    }

    onButtonPress(){
        Actions.taskCreate({date: this.props.date})
    }

    renderRow(task) {
        return <ListItem task={task} />;
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
    const tasks = _.map(state.tasks, (val, uid) => {
        return {...val, uid};
    });

    return {tasks};
};

export default connect(mapStateToProps, {tasksFetch}) (TaskList);