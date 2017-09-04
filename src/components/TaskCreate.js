import React, {Component} from 'react';
import {connect} from 'react-redux';
import {taskUpdate, taskCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import TaskForm from './TaskForm';

class TaskCreate extends Component {
    onButtonPress(){
        console.log("================="+this.props.date.uid);
        const {name, phone, shift, dateUid} = this.props;

        this.props.taskCreate({name, phone, shift: shift || 'Sport', dateUid: this.props.date.uid}, this.props.date);
    }

    render(){
        return(
            <Card>
                <TaskForm{...this.props}/>
                <CardSection >
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const {name, phone, shift, dateUid} = state.taskForm;
    return {name, phone, shift, dateUid};
};

export default connect(mapStateToProps,{
    taskUpdate, taskCreate
})(TaskCreate);