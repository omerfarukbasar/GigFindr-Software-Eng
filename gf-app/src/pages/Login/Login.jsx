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
    alert('First Name: ' + this.state.firstName + '\nLast Name: ' + this.state.lastName + '\nEmail: ' + this.state.emailAddress + '\nPassword: ' + this.state.password + '\nUser Type: ' + this.state.userType);
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

handleChange = (e) => {
  this.setState({...this.data, [e.data.target]: e.data.value})
}

  // Form Submit button
  submit(cred) {
    // Ensure everything was entered
    alert('Username: ' + this.state.userName + '\nPassword: ' + this.state.password);
    /*
    fetch('http://localhost:8443/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cred)
    })
      .then(data => data.json()
      )
    */
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