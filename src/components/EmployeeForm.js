import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common';

class EmployeeForm extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        //style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="M" value="M"/>
                        <Picker.Item label="T" value="T"/>
                        <Picker.Item label="W" value="W"/>
                        <Picker.Item label="TH" value="TH"/>
                        <Picker.Item label="F" value="F"/>
                        <Picker.Item label="S" value="S"/>
                    </Picker>
                </CardSection>
            </View>
        );

    }
}
const styles = {
    datePickerText:{
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const{name,phone,shift} = state.employeeForm;

    return{name,phone,shift}
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);