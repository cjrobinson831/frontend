import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt');
        return options;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default function (Component){
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getIten('jwt');
            const notLoggedIn = <div>Please login to see users</div>


            return <> {token ? <Component {...this.props } /> : notLoggedIn } </>;
        }
    }
}



import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Form from './components/Form';
import { withRouter } from 'react-router-dom';


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


  //render(){

   // const { isLoaded, items } = this.state;

   // if(!isLoaded) {
   //   return <div>Loading...</div>
   // }

   // else{
     
  //return (
    //<div className="App">
      //<UserForm />
      //<Form />
   // </div>
//  );
//}
//}
//}
//export default withRouter(App);