import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {datesFetch} from '../actions';
import DateItem from './DateItem';

class DateList extends Component{
    componentWillMount(){
        this.props.datesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({dates}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(dates);
    }

    renderRow(date) {
        console.log('Date name: ', date);
        return <DateItem date={date} />;
    }

    render(){
        console.log(this.props);
        return(
            <ListView
                //enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const dates = _.map(state.dates, (val, uid) => {
        return {...val, uid};
    });

    return {dates};
};

export default connect(mapStateToProps, {datesFetch}) (DateList);