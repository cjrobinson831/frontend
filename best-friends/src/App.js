import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { UserForm } from './components/UserForm';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    }
  }

componentDidMount(){
  fetch('https://best-friend-reminders.herokuapp.com/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        betterFriends: json,
      })
    });
}

  render(){

    const { isLoaded, item } = this.state;
    if(!isLoaded){
      return<div>Loading...</div>;
    }
    else{

    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}
}

export default withRouter(App);

