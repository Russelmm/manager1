import React, {Component} from 'react';
import {View, Text } from 'react-native';
import {connect} from 'react-redux';
import {mindUpdate} from '../actions';
import {CardSection, Input} from './common';

class MindForm extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <Input
                        label="Thought"
                        placeholder="Your thought"
                        value={this.props.description}
                        onChangeText={value => this.props.mindUpdate({prop: 'description', value})}
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        numberOfLines = {5}
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
    const{description, dateName} = state.mindForm;

    return{description, dateName}
};

export default connect(mapStateToProps, {mindUpdate})(MindForm);