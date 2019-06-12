import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errormessage: null
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState ({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = 'http://localhost:3000/login';

        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);

                this.props.history.push('/users');
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <FormContainer>
                <h1>Login</h1>
                <Sigin onSubmit={this.handleSubmit}>
                    <h2>Username:</h2>
                    <input
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text"
                    />
                     <input
                        name="Password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                    />
                        <RaisedButton
                        label="Login"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                        />
                    <Link to='/register' style={styles.button}>No account? Click to Register</Link>
                </Sigin>
            </FormContainer>
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Login;

