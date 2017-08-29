import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from "../actions";
import { Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component {
    state = { showModal: false};
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop,value});
        });
        console.log("222222222222222"+this.props.employee);
    }

    onButtonPress(){
        const{name, phone, shift} = this.props;
        this.props.employeeSave({name, phone,shift,uid: this.props.employee.uid},this.props.date);
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;
        console.log('x');
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render(){
        return(
            <Card>
                <EmployeeForm/>
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
    const{name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
}) (EmployeeEdit);