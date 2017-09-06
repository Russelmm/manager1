import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Agenda } from 'react-native-calendars';
import  TaskList  from './TaskList';
import moment from "moment";
import {tasksFetch} from '../actions';
import {connect} from 'react-redux';

class DateList extends Component{

    constructor(props) {
        super(props);
        let today = new Date();
        let dateString = moment(today).format('YYYY-MM-DD');
        let currentDate = this.props.date === undefined ? dateString : this.props.date;
        this.state = { date: currentDate };
    }

    componentDidMount(){
        this.props.tasksFetch(this.state.date);
    }

    onDatePress(day){
        this.props.tasksFetch(day.dateString);
        this.setState({date: day.dateString});

    }

    render(){
        console.log(this.props);
        return (
            <ScrollView>

                    <Agenda
                        selected={this.state.date}
                        minDate={'2012-05-10'}
                        maxDate={'2020-05-30'}
                        onDayPress={(day) => {this.onDatePress(day)}}

                    />
                <TaskList date={this.state.date} />
            </ScrollView>
        )
    }
}



export default connect(null, {tasksFetch}) (DateList);




