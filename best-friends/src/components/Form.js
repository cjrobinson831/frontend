import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';


export class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        errorMessage: null
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
    })
    }

    continue = e => {
        e.preventDefault();
        this.props.history.push('/Reminders')
    }

    onSubmit = event => {
        this.props.history.push('/Success')

        const endpoint = 'https://best-friend-reminders.herokuapp.com/login';

        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);

                this.props.history.push('/users');
            })
            .catch(error => console.error(error));
    };

    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                     <AppBar title="Friendly Reminders" />
                     <TextField
                        hintText="Name "
                        floatingLabelText="Name"
                        onChange={this.handleChange}
                        dafaultValue={values}
                        />
                        <br/>
                        <TextField
                        hintText="Email "
                        floatingLabelText="Email"
                        onChange={this.handleChange}
                        dafaultValue={values}
                        />
                         <br/>
                         <TextField
                        hintText="Friendly Reminder "
                        floatingLabelText="Friendly Reminder"
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
                        label="Submit"
                        primary={false}
                        style={styles.button}
                        onClick={() => this.onSubmit()}
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

export default Form;
