import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <form>
                <MuiThemeProvider> 
                    <input
                    name="firstName" 
                    placeholder='First Name' 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                     />
                    <br/>
                    <input
                    name="lastName" 
                    placeholder='Last Name' 
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                     />
                    <br/>
                    <input
                    name="userName" 
                    placeholder='User Name' 
                    value={this.state.userName} 
                    onChange={e => this.change(e)}
                     />
                    <br/>
                     <input 
                    name="email"
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    />
                    <br/>
                     <input
                    name="password"
                    type="password"
                    placeholder='Password' 
                    value={this.state.password} 
                    onChange={e => this.change(e)}
                    />
                    <br/>
                     <RaisedButton
                        label="Submit"
                        primary={true}
                        style={styles.button}
                        onClick={() => this.onSubmit()}
                        />
                </MuiThemeProvider>
            </form>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Form;
