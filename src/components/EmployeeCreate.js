import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress(){
        console.log("================="+this.props.date.uid);
        const {name, phone, shift, dateUid} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Sport', dateUid: this.props.date.uid}, this.props.date);
    }

    render(){
        return(
            <Card>
                <EmployeeForm{...this.props}/>
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
    const {name, phone, shift, dateUid} = state.employeeForm;
    return {name, phone, shift, dateUid};
};

export default connect(mapStateToProps,{
    employeeUpdate, employeeCreate
})(EmployeeCreate);