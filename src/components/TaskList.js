import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native';
import ListItem from './ListItem';
import { CardSection, Button} from './common';
import {Actions} from 'react-native-router-flux';
import index from "../reducers/index";

class TaskList extends Component{

    onButtonPress(){
        Actions.taskCreate({date: this.props.date})
    }

    render(){

        let tasks = this.props.tasks.map((task, index) => {
            return (
                <CardSection key={index}>
                    <ListItem  task={task} />
                </CardSection>

            )
        });
        return(
            <View>
                {tasks}
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

export default connect(mapStateToProps)(TaskList);