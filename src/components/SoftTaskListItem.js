import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class SoftTaskListItem extends Component {
    onRowPress(){
        Actions.softTaskEdit({task: this.props.task});
    }

    render(){
        const {name} = this.props.task;
        const {phone} = this.props.task;
        const {shift} = this.props.task;

        return (

            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <Text style={styles.titleStyle}>
                        {name} - {shift}
                    </Text>
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

export default SoftTaskListItem;