import React, {Component} from 'react';
import { Calendar } from 'react-native-calendars';
import moment from "moment";
import {Actions} from 'react-native-router-flux';
import { DatePickerAndroid } from 'react-native';

class MainCalendar extends Component {

    constructor(props) {
        super(props);
        let today = new Date();
        let dateString = moment(today).format('YYYY-MM-DD');
        //let currentDate = this.props.date === undefined ? dateString : this.props.date;
        this.state = {
            date: dateString
        };
    }

    onDatePress(day){
        Actions.dateList({date: day.dateString})
    }

    render(){
        return (
                <Calendar
                    current={this.state.date}
                    minDate={'2012-05-10'}
                    maxDate={'2020-05-30'}
                    onDayPress={(day) => {this.onDatePress(day)}}
                    //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    //pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    //futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    //scrollEnabled={true}
                />
        )
    }
}

export default MainCalendar;