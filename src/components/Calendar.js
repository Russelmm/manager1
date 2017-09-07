import React, {Component} from 'react';
import { CalendarList } from 'react-native-calendars';
import moment from "moment";
import {Actions} from 'react-native-router-flux';

class MainCalendar extends Component {

    constructor(props) {
        super(props);
        let today = new Date();
        let dateString = moment(today).format('YYYY-MM-DD');
        let currentDate = this.props.date === undefined ? dateString : this.props.date;
        this.state = {
            date: currentDate
        };
    }

    onDatePress(day){
        Actions.dateList({date: day.dateString})
    }

    render(){
        return (
                <CalendarList
                    selected={this.state.date}
                    minDate={'2012-05-10'}
                    maxDate={'2020-05-30'}
                    onDayPress={(day) => {this.onDatePress(day)}}
                />
        )
    }
}

export default MainCalendar;