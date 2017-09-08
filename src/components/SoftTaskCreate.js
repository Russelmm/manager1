import React, {Component} from 'react';
import {connect} from 'react-redux';
import {softTaskCreate, softTaskUpdate} from '../actions';
import {Card, CardSection, Button} from './common';
import SoftTaskForm from './SoftTaskForm';

class SoftTaskCreate extends Component {
    onButtonPress(){

        const {name, phone, shift, dateName} = this.props;

        this.props.softTaskCreate({name, phone, shift: shift || 'Sport', dateName: this.props.date}, this.props.date);
    }

    render(){
        return(
            <Card>
                <SoftTaskForm{...this.props}/>
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
    const {name, phone, shift, dateName} = state.softTaskForm;
    return {name, phone, shift, dateName};
};

export default connect(mapStateToProps,{
    softTaskCreate, softTaskUpdate
})(SoftTaskCreate);