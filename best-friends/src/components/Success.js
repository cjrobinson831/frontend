import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Form from './Form';
import RaisedButton from 'material-ui/RaisedButton';



export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM SEND BACK END API//
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    Form = e => {
        e.preventDefault();
        this.props.form();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                     <AppBar title="Success" />
                     <h1>Thank You for Your Submission</h1>
                     <p>You will get an email with your confirmation</p>
                     <RaisedButton
                        label="Form"
                        primary={true}
                        style={styles.button}
                        onClick={this.Form}
                        />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default Success;
