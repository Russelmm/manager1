import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {taskUpdate} from '../actions';
import {CardSection, Input} from './common';

class TaskForm extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <Input
                        label="Task"
                        placeholder="Your task"
                        value={this.props.name}
                        onChangeText={value => this.props.taskUpdate({prop: 'name', value})}
                        numberOfLines={2}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Info"
                        placeholder="Description"
                        value={this.props.phone}
                        onChangeText={value => this.props.taskUpdate({prop: 'phone', value})}
                        numberOfLines={2}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        //style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.taskUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Sport" value="Sport"/>
                        <Picker.Item label="Business" value="Business"/>
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
    const{name,phone,shift, dateName} = state.taskForm;

    return{name,phone,shift, dateName}
};

export default connect(mapStateToProps, {taskUpdate})(TaskForm);