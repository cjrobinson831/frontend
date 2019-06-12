import React, { Component } from 'react';
import './App.css';
import FormPersonalDetails from './components/FormPersonalDetails';
import Form from './components/Form';
import { Route, NavLink, withRouter } from 'react-router-dom';
import FormUserDetails from './components/FormUserDetails';


class App extends Component {
  render(){
    return (
      <>
      <header>
        <nav>
          <NavLink to="/FormUserDetails">Login</NavLink>
          <NavLink to="/FormPersonalDetails">Register</NavLink>
          <NavLink to="/form">Form</NavLink>
          <button onClick={this.logout}>Logout</button>
        </nav>
      </header>
      <main>
        <Route path="/FormUserDetails" component={FormUserDetails} />
        <Route path="/FormPersonalDetails" component={FormPersonalDetails} />
        <Route path="/form" component={Form} />
      </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt')

    this.props.history.push('/login');
  };
}
export default withRouter(App);
