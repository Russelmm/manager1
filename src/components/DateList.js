import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Agenda } from 'react-native-calendars';
import  TaskList  from './TaskList';
import SoftTaskList from './SoftTaskList';
import moment from "moment";
import {tasksFetch, softTaskFetch, mindsFetch} from '../actions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import MindList from "./MindList";

class DateList extends Component{

    constructor(props) {
        super(props);
        let today = new Date();
        let dateString = moment(today).format('YYYY-MM-DD');
        let currentDate = this.props.date === undefined ? dateString : this.props.date;
        this.state = {
            date: currentDate
        };
    }

    componentDidMount(){
        this.props.tasksFetch(this.state.date);
        this.props.softTaskFetch(this.state.date);
        this.props.mindsFetch(this.state.date);
    }

    onDatePress(day){
        this.props.tasksFetch(day.dateString);
        this.props.softTaskFetch(day.dateString);
        this.props.mindsFetch(day.dateString);
        this.setState({date: day.dateString});

    }

    onButtonPress(){
        Actions.calendar({date: this.state.date})
    }

    render(){
        let today = this.state.date;
        let todayArr = today.split('-');
        let mounth = '';
        switch (todayArr[1]) {
            case '01': mounth = 'January';
                break;
            case '02': mounth = 'February';
                break;
            case '03': mounth = 'March';
                break;
            case '04': mounth = 'April';
                break;
            case '05': mounth = 'May';
                break;
            case '06': mounth = 'June';
                break;
            case '07': mounth = 'Jule';
                break;
            case '08': mounth = 'August';
                break;
            case '09': mounth = 'September';
                break;
            case '10': mounth = 'October';
                break;
            case '11': mounth = 'November';
                break;
            case '12': mounth = 'December';
                break;
        }
        return (
            <ScrollView>
                <TouchableWithoutFeedback onPress={this.onButtonPress.bind(this)}>
                    <View >
                        <Text style={styles.titleStyle}>{mounth}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Agenda
                    selected={this.state.date}
                    minDate={'2012-05-10'}
                    maxDate={'2020-05-30'}
                    onDayPress={(day) => {this.onDatePress(day)}}
                    hideKnob={true}
                />
                <View style={styles.taskListStyle}>
                    <TaskList date={this.state.date} />
                    <SoftTaskList date={this.state.date} />
                    <MindList date={this.state.date}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    taskListStyle: {
        marginTop: -98
    },
    titleStyle: {
        fontSize:18,
        paddingLeft: 15,
        color: '#777',
        paddingTop: 8,
        paddingBottom: 8
    },
};

export default connect(null, {tasksFetch, softTaskFetch, mindsFetch}) (DateList);




