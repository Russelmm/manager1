import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import TaskForm from './TaskForm';
import {taskUpdate, taskSave, taskDelete} from "../actions";
import { Card, CardSection, Button, Confirm} from './common';

class TaskEdit extends Component {
    state = { showModal: false};
    componentWillMount(){
        _.each(this.props.task, (value, prop) => {
            this.props.taskUpdate({prop,value});
        });
    }

    onButtonPress(){
        const{name, phone, shift, dateUid} = this.props;
        this.props.taskSave({name, phone,shift,dateUid, uid: this.props.task.uid},this.props.date);
    }

    onAccept() {
        const { dateUid, uid } = this.props.task;
        //console.log('x');
        this.props.taskDelete({ dateUid, uid });
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render(){
        return(
            <Card>
                <TaskForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>



                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Delete task
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const{name, phone, shift, dateUid} = state.taskForm;

    return {name, phone, shift, dateUid};
};

export default connect(mapStateToProps, {
    taskUpdate, taskSave, taskDelete
}) (TaskEdit);