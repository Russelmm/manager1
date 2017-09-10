import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import MindListItem from './MindListItem';
import { CardSection, RoundButton} from './common';
import {Actions} from 'react-native-router-flux';

class MindList extends Component{

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
        Actions.mindCreate({date: this.props.date})
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
        let minds = this.props.minds.map((mind, index) => {
            return (
                <CardSection key={index} >
                    <MindListItem  mind={mind} />
                </CardSection>

            )
        });
        return(
            <View>
                <CardSection>
                    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                        <View >
                            <Text style={styles.titleStyle}>Thoughts</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <RoundButton onPress={this.onButtonPress.bind(this)}> Add </RoundButton>
                </CardSection>
                <View style={this.state.styles} >
                    {minds}
                </View>
            </View>

        );
    }
}

const mapStateToProps = state => {
    const minds = _.map(state.minds, (val, uid) => {
        return {...val, uid};
    });

    return {minds};
};

const styles = {
    titleStyle: {
        flex:3,
        fontSize:25,
        paddingLeft: 15,
        color: '#007aff',
        paddingTop: 8,
        paddingBottom: 8
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
};

export default connect(mapStateToProps)(MindList);