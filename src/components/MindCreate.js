import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mindUpdate, mindCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import MindForm from './MindForm';

class MindCreate extends Component {
    onButtonPress(){

        const {description, dateName} = this.props;

        this.props.mindCreate({description, dateName: this.props.date}, this.props.date);
    }

    render(){
        return(
            <Card>
                <MindForm{...this.props}/>
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
    const {description, dateName} = state.mindForm;
    return {description, dateName};
};

export default connect(mapStateToProps,{
    mindUpdate, mindCreate
})(MindCreate);