import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {dateUpdate} from '../actions';
import {CardSection, Input} from './common';

class DateForm extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <Input
                        label="Date"
                        placeholder="DD.MM.YY"
                        value={this.props.name}
                        onChangeText={value => this.props.dateUpdate({prop: 'name', value})}
                    />
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
    const{name} = state.dateForm;

    return{name}
};

export default connect(mapStateToProps, {dateUpdate})(DateForm);