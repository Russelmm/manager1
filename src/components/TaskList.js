import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import ListItem from './ListItem';
import { CardSection, RoundButton} from './common';
import {Actions} from 'react-native-router-flux';
import index from "../reducers/index";

class TaskList extends Component{

    constructor(props) {
        super(props);
        const styles = {
            display: 'none'
        };
        this.state = { styles: styles };
    }

    componentWillReceiveProps(){
        const styles2 = {
            display: 'none'
        };
        this.setState({styles: styles2})
    }

    onButtonPress(){
        Actions.taskCreate({date: this.props.date})
    }

    onRowPress(){
        const styles = {
            display: 'flex'
        };
        const styles2 = {
            display: 'none'
        };
        this.state.styles.display === 'none' ? this.setState({styles: styles}) : this.setState({styles: styles2})

    }

    render(){

        let tasks = this.props.tasks.map((task, index) => {
            return (
                <CardSection key={index} >
                    <ListItem  task={task} />
                </CardSection>

            )
        });
        return(
            <View>
                <CardSection>
                    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                        <View >
                            <Text style={styles.titleStyle}>Hard tasks</Text>
                        </View>
                </TouchableWithoutFeedback>
                    <RoundButton onPress={this.onButtonPress.bind(this)}> Add </RoundButton>
                </CardSection>
                <View style={this.state.styles} >
                    {tasks}
                </View >
            </View>

        );
    }
}

const mapStateToProps = state => {
    const tasks = _.map(state.tasks, (val, uid) => {
        return {...val, uid};
    });

    return {tasks};
};

const styles = {
    titleStyle: {
        flex:3,
        fontSize:25,
        paddingLeft: 15,
        color: '#007aff',
        paddingTop: 8,
        paddingBottom: 8
    }
};

export default connect(mapStateToProps)(TaskList);