import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Form from './components/Form';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      betterFriends: [],

    }
  }

  componentDidMount() {

    fetch('https://best-friend-reminders.herokuapp.com/')
    .then(res => res.json())
    .then(json => { 
      this.setState({
        isLoaded: true,
        items:json,
      })
    })
  }


  render(){

    const { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }

    else{
     
  return (
    <div className="App">
      <UserForm />
      <Form />
    </div>
  );
}
}
}
export default App;
