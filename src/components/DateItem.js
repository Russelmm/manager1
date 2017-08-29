import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common/';
import {employeesFetch} from '../actions';
import {connect} from 'react-redux';

class DateItem extends Component {
    onRowPress(){
        //this.props.employeesFetch();
        Actions.employeeList({date: this.props.date});
        //this.props.employeeSave({name, phone,shift,uid: this.props.employee.uid});
    }

    render(){
        const {name} = this.props.date;

        return (

            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize:18,
        paddingLeft: 15
    }
};

//export default connect(null, { employeesFetch })(DateItem);

export default DateItem;
