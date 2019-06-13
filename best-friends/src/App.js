import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { Route, NavLink} from 'react-router-dom';
import Form from './components/Form';
import FormPersonalDetails from './components/FormPersonalDetails';
import FormUserDetails from './components/FormUserDetails';
import Success from './components/Success';
import axios from 'axios';
import {BrowserRouter as Router, Switch} from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      betterFriends: [],
      newUser: {
      firstName: "",
      lastName: "",
      }
    }
  }

componentDidMount(){
  axios 
  .get('https://best-friend-reminders.herokuapp.com/')
    .then(res => this.setState({betterFriends: res.data}))
    .then(json => {
      this.setState({
        isLoaded:true,
        betterFriends: json,
      })
    });
}

render() {
  return (
    <Router>
    <div className="App">
      <nav>

        <Route
        exact
        path="/FormPersonalDetails"
        render={props => (
          <FormPersonalDetails
            {...props} 
           betterFriends={this.state.betterFriends}
          />
        )}
      />
      
      <Route
        exact
        path="/FormUserDetails"
        render={props => (
          <FormUserDetails
            {...props} 
          />
        )}
      />

<Route
        exact
        path="/Form"
        render={props => (
          <Form
            {...props} 
          />
        )}
      />
        
        <Route
        exact
        path="/Success"
        render={props => (
          <Success
            {...props} 
          />
        )}
      />
      </nav>
      </div>
      </Router>
     
  );
}
}

export default App;

