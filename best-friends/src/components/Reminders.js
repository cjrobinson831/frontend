import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';


export class Reminders extends Component {
    continue = e => {
        this.props.history.push('/Success')
        e.preventDefault();
        //this.props.nextStep();
    }
    back = e => {
        this.props.history.push('/Form')
        e.preventDefault();
        
    }

    onChange = e => {
        
    }
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                     <AppBar title="Reminders" />
                     <TextField
                        hintText="Automated Reminder "
                        floatingLabelText="Automated Reminder"
                        onChange={this.handleChange}
                        dafaultValue={values}
                        />
                        <br/>
                        <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        />
                          <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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

export default Reminders;