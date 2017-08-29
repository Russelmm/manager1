import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dateUpdate, dateCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import DateForm from './DateForm';

class DateCreate extends Component {
    onButtonPress(){
        const {name} = this.props;

        this.props.dateCreate({name});
    }

    render(){
        return(
            <Card>
                <DateForm{...this.props}/>
                <CardSection >
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const {name} = state.dateForm;
    return {name};
};

export default connect(mapStateToProps,{dateCreate, dateUpdate})(DateCreate);