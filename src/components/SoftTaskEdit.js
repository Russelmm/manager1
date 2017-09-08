import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskForm from './TaskForm';
import {softTaskUpdate, softTaskSave, softTaskDelete} from "../actions";
import { Card, CardSection, Button, Confirm} from './common';

class SoftTaskEdit extends Component {
    state = { showModal: false};
    componentWillMount(){
        _.each(this.props.task, (value, prop) => {
            this.props.softTaskUpdate({prop,value});
        });
    }

    onButtonPress(){
        const{name, phone, shift, dateName} = this.props;
        this.props.softTaskSave({name, phone,shift,dateName, uid: this.props.task.uid});
    }

    onAccept() {
        const { uid, dateName } = this.props.task;
        this.props.softTaskDelete({ uid, dateName });
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
    const{name, phone, shift, dateName} = state.softTaskForm;

    return {name, phone, shift, dateName};
};

export default connect(mapStateToProps, {
    softTaskUpdate, softTaskSave, softTaskDelete
}) (SoftTaskEdit);