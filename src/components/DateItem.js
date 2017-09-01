import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common/';


class DateItem extends Component {
    onRowPress(){
        Actions.employeeList({date: this.props.date});
    }

    render(){
        const {name} = this.props.date;

        return (

            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View style={styles.withinDayHours}>
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
        fontSize:15
    },
    withinDayHours:{
        paddingLeft:7,paddingTop:10,paddingBottom:10,paddingRight:10,
        flexDirection:"row",
        flexWrap:"nowrap"
    },
};

export default DateItem;
