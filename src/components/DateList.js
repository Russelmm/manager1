import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import {datesFetch} from '../actions';
import DateItem from './DateItem';
import index from "../reducers/index";
import {ListView, View, Text} from 'react-native';

class DateList extends Component{
    componentWillMount(){
        this.props.datesFetch();

        //this.createDataSource(this.props);
    }

    /*componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({dates}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(dates);
    }

    renderRow(date) {
        //console.log('Date name: ', date);
        return <DateItem date={date} />;
    }*/

    render(){

        /*return(
            <ListView
                //enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );*/

        const slides = this.props.dates.map((date, index) => {
            return (
                <DateItem key={index} date={date}/>
            )
        });
        return (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.withinDayHoursContainer}>
                    {slides}
                </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const dates = _.map(state.dates, (val, uid) => {
        return {...val, uid};
    });

    return {dates};
};

let styles = StyleSheet.create({
    wrapper: {
    },
    withinDayHoursContainer:{
        marginTop:3,
        borderTopColor:"rgba(255,255,255,0.7)",
        borderBottomColor:"rgba(255,255,255,0.7)"
    },

});

export default connect(mapStateToProps, {datesFetch}) (DateList);