import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
    continue = e => {
        this.props.history.push('/Form')
        e.preventDefault();
        //this.props.nextStep();
    }

    back = e => {
        this.props.history.push('/FormUserDetails')
        e.preventDefault();
        
    }

    onChange = e => {
        
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                     <AppBar title="Registration" />
                     <TextField
                        hintText="Name "
                        floatingLabelText="Name"
                        onChange={this.handleChange}
                        dafaultValue={values}
                        />
                        <br/>
                        <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange}
                        dafaultValue={values}
                        />
                        <br/>
                        <TextField
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange}
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

export default FormPersonalDetails;