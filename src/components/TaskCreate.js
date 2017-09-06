import React, {Component} from 'react';
import {connect} from 'react-redux';
import {taskUpdate, taskCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import TaskForm from './TaskForm';

class TaskCreate extends Component {
    onButtonPress(){

        const {name, phone, shift, dateName} = this.props;

        this.props.taskCreate({name, phone, shift: shift || 'Sport', dateName: this.props.date.dateString}, this.props.date);
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
    const {name, phone, shift, dateName} = state.taskForm;
    return {name, phone, shift, dateName};
};

export default connect(mapStateToProps,{
    taskUpdate, taskCreate
})(TaskCreate);