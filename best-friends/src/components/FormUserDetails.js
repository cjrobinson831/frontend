import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';


export class FormUserDetails extends Component {

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    continue = e => {
        e.preventDefault();
        this.props.history.push('/FormPersonalDetails')

        const endpoint = 'https://best-friend-reminders.herokuapp.com/api/login'

        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);

                this.props.history.push('/reminders');
            })
            .catch(error => console.error(error))
    };

    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                     <AppBar title="Login" />
                     <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange}
                        dafaultValue={values}
                        />
                        <br/>
                        <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange}
                        dafaultValue={values}
                        />
                        <br/>
                        <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
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

export default FormUserDetails;
