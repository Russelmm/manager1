import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MindListItem extends Component {
    onRowPress(){
        Actions.mindEdit({mind: this.props.mind});
    }

    render(){
        const {description} = this.props.mind;

        return (

            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <Text style={styles.titleStyle}>
                        {description}
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

export default MindListItem;