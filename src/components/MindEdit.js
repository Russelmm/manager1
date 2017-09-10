import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MindForm from './MindForm';
import {mindUpdate, mindSave, mindDelete} from "../actions";
import { Card, CardSection, Button, Confirm} from './common';

class MindEdit extends Component {
    state = { showModal: false};
    componentWillMount(){
        _.each(this.props.mind, (value, prop) => {
            this.props.mindUpdate({prop,value});
        });
    }

    onButtonPress(){
        const{description, dateName} = this.props;
        this.props.mindSave({description,dateName, uid: this.props.mind.uid});
    }

    onAccept() {
        const { uid, dateName } = this.props.mind;
        this.props.mindDelete({ uid, dateName });
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render(){

        return(
            <Card>
                <MindForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>



                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Delete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const{description, dateName} = state.mindForm;

    return {description, dateName};
};

export default connect(mapStateToProps, {
    mindUpdate, mindSave, mindDelete
}) (MindEdit);