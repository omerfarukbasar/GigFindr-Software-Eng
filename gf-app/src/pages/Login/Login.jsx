/* 
Insipired by https://codepen.io/ehermanson/pen/KwKWEv
*/

import Home from "../Home/Home";
import React from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import "../../components/userProfile";
import UserProfile from "../../components/userProfile";
const { Component } = React;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: true,
      right: 0,
    };
  }

  handleClick(button) {
    if(this.state.newUser && button != 'signUp') {
      this.setState({newUser: false})
    } else if(!this.state.newUser && button != 'signIn') {
      this.setState({newUser: true})
    }
  }
  
  render() {
    return(
           <div className='formContainer'>
              <div className='formHeader'>
                  <div 
                    className={ this.state.newUser ? 'headerActive' : 'headerInActive' } 
                    onClick={() => this.handleClick('signUp')}
                    >
                    <button className='headerButton'> Sign Up </button>
                  </div>
                  <div 
                    className={ this.state.newUser ? 'headerInActive' : 'headerActive' } 
                    onClick={() => this.handleClick('signIn')}
                    >
                    <button className='headerButton'> Sign In </button>
                  </div>
              </div>
              {
                this.state.newUser ? <SignUp />: <SignIn />
              }
           </div>
    ) 
  }
}


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.handleFNChange = this.handleFNChange.bind(this);
    this.handleLNChange = this.handleLNChange.bind(this);
    this.handleUNChange = this.handleUNChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
      emailAddress: null,
      password: null,
      userType: 'non-musician', // Initial value
    };
  }

  // Change handles
  handleFNChange(e) {
    this.setState({firstName: e.target.value})
  }
  handleLNChange(e) {
    this.setState({lastName: e.target.value})
  }
  handleUNChange(e) {
    this.setState({userName: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({emailAddress: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
  handleUserTypeChange(e) {
    this.setState({userType: e.target.value})
  }

  // Form Submit button
  submit() {
    // Ensure everything was entered
    if( (this.state.firstName == null) || (this.state.lastName == null) || (this.state.userName == null) || (this.state.emailAddress == null) || (this.state.password == null) )
      alert('Enter all the fields!');
    else {
      // Send data to the API
      var cred = {firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, email: this.state.emailAddress, password: this.state.password, userType: this.state.userType}

      fetch('http://localhost:8443/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
      })
        .then(response => response.json()) // was .json()
        .then(data => {
          // Display response message to user
          alert(data.message);

          // Route user to home
          window.location = "/Login";
          

          // Check if account was made and reroute user to home?
        })
        .catch((error) => {
          console.error('Error:', error);
        })
    }
  }

  render() {
    return(
      <div>
        <div className='signUpContainer'>
        <h1 className='headerText'>GigFindr</h1>
        <div className='inputSectionSplit'>
          <input onChange={this.handleFNChange} type='text' className='firstName' required/>
          <label className='inputLabel'>First Name</label>
        </div>
        <div className='inputSectionSplit'>
          <input onChange={this.handleLNChange} type='text' className='lastName' required/>
          <label className='inputLabel'>Last Name</label>
        </div>
        <div className='inputSection'>
          <input onChange={this.handleUNChange} type='text' className='userName' required/>
          <label className='inputLabel'>User Name</label>
        </div>
        <div className='inputSection'>
          <input onChange={this.handleEmailChange} type='text' className='emailAddress' required/>
          <label className='inputLabel'>Email Address</label>
        </div>
        <div className='inputSection'>
          <input onChange={this.handlePasswordChange} type='password' className='password' required/>
          <label className='inputLabel'>Password</label>
        </div>
        <div className="inputSection">
        <span><label className='inputLabel' for="userType">Account Type:</label></span>
          <select onChange={this.handleUserTypeChange} name="userType" id="userType" className="sel-membership">
              <option value="non-musician">Non-Musician</option>
              <option value="musician">Musician</option>
              <option value="venue">Venue</option>
            </select>
          </div>
      </div>
        <div className='formFooter'>
          <button onClick={this.submit.bind(this)} className='saveForm'>Submit</button>
        </div>
      </div>
    )
  }
}


class SignIn extends Component {
  constructor(props) {
    super(props)
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      userName: null,
      password: null,
    };
    this.data = {}
  }

  // Change handles
  handleUserNameChange(e) {
    if(e.target.value != "")
      this.setState({userName: e.target.value})
    else
      this.setState({userName: null})
  }
  handlePasswordChange(e) {
    if(e.target.value != "")
      this.setState({password: e.target.value})
    else
      this.setState({password: null})
  }

  // Form Submit button
  submit() {
    // Ensure everything was entered
    if( (this.state.userName == null) || (this.state.password == null) )
      alert('Enter all fields!');
    else {
      // Create a json object to send to API
      var cred = {username: this.state.userName, password: this.state.password};
      
      // Send data to the API to validate user 
      fetch('http://localhost:8443/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
      })
        .then(response => response.json()) // was .json()
        .then(data => {
          // No user was found, send message
          if(data.firstName == null)
            alert('User does not exist!')

          // User was found   TODO: Reroute user to homepage
          else {
            //alert('Welcome ' + data.firstName + ", you will eventually be re-routed.")
            
            // Set cookie ID
            localStorage.setItem("ID", data.id);
            UserProfile.setID(data.id);

            // Route user to home
            window.location = "/Home";
          }
        })

        .catch((error) => {
          console.error('Error:', error);
        })
    }
  }

  render() {
    return(
      <div>
        <div className='formBody'>
          <div className='signInContainer'>
            <h4 className='headerText'>Welcome Back</h4>
            <div className='inputSection'>
              <input onChange={this.handleUserNameChange} type='text' className='userName' required/>
              <label className='inputLabel'>User Name</label>
            </div>
            <div className='inputSection'>
              <input onChange={this.handlePasswordChange} type='password' className='password' required/>
              <label className='inputLabel'>Password</label>
            </div>

          </div>
        </div> 
        <div className='formFooter'>
          <button onClick={this.submit.bind(this)} className='saveForm'>Login</button>
        </div>
      </div>
    )
  }
}


export default function Posts() {
  return (<App />);

}