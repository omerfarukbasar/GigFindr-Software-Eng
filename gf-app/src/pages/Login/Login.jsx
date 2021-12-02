/* 
Insipired by https://codepen.io/ehermanson/pen/KwKWEv
*/

import React from "react";
import "./Login.css"
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
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
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
    if( (this.state.firstName == '') || (this.state.lastName == '') || (this.state.emailAddress == '') || (this.state.password == '') )
      alert('Enter all the fields!');
    else {
      alert('First Name: ' + this.state.firstName + '\nLast Name: ' + this.state.lastName + '\nEmail: ' + this.state.emailAddress + '\nPassword: ' + this.state.password + '\nUser Type: ' + this.state.userType);
      // Figure out how to send data to the API
    }
  }

  render() {
    return(
      <div>
        <div className='formBody'>
          <div className='signUpContainer'>
            <h4 className='headerText'>Join Us Today</h4>
            <div className='inputSectionSplit'>
              <input onChange={this.handleFNChange} type='text' className='firstName' required/>
              <label className='inputLabel'>First Name</label>
            </div>
            <div className='inputSectionSplit'>
              <input onChange={this.handleLNChange} type='text' className='lastName' required/>
              <label className='inputLabel'>Last Name</label>
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
            <label for="userType">Choose a Membership Status:</label>
            <select onChange={this.handleUserTypeChange} name="userType" id="userType">
              <option value="non-musician">Non-Musician</option>
              <option value="musician">Musician</option>
              <option value="venue">Venue</option>
            </select>
            </div>
          </div>
        </div>
        <div className='formFooter'>
          <button onClick={this.submit.bind(this)} className='saveForm'>Submit</button>
        </div>
      </div>
    )
  }
}

// EDITED
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
    this.setState({userName: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
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
          console.log(data)

          // No user was found, send message
          if(data.firstName == null)
            alert('User does not exist!')

          // User was found   TODO: Set session variables(?), re-route user to homepage
          else
            alert('Welcome ' + data.firstName + ", you will eventually be re-routed.")

        })

        .catch((error) => {
          console.error('Error:', error);
        })
     /*
      fetch('http://localhost:8443/api/users/')
        .then(response => response.json())
        .then(data => console.log(data));
      */
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
              <input onChange={this.handlePasswordChange} type='text' className='password' required/>
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

export default function Post() {
  return (<App />);

}