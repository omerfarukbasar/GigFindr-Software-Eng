/* 
Insipired by https://codepen.io/craycraftdan/pen/ypxrNg

*/
import "./login.css";
import React from "react";
const { Component } = React;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: true,
      right: 0,
    }
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
              <div className='formBody'>
                {
                  this.state.newUser ? <SignUp />: <SignIn />
                }
              </div>
              <div className='formFooter'>
                <button className='saveForm'> { this.state.newUser ? 'Submit' : 'Login'} </button>
              </div>
           </div>
    ) 
  }
}


class SignUp extends Component {
  render() {
    return(      
      <div className='signUpContainer'>
        <h1 className='headerText'>GigFindr</h1>
        <div className='inputSectionSplit'>
          <input type='text' className='firstName' required/>
          <label className='inputLabel'>First Name</label>
        </div>
        <div className='inputSectionSplit'>
          <input type='text' className='lastName' required/>
          <label className='inputLabel'>Last Name</label>
        </div>
        <div className='inputSection'>
          <input type='text' className='userName' required/>
          <label className='inputLabel'>User Name</label>
        </div>
        <div className='inputSection'>
          <input type='text' className='emailAddress' required/>
          <label className='inputLabel'>Email Address</label>
        </div>
        <div className='inputSection'>
          <input type='password' className='password' required/>
          <label className='inputLabel'>Password</label>
        </div>
        <div className="inputSection">
        <span><label className='inputLabel' for="userType">Account Type:</label></span>
          <select name="userType" id="userType" className="sel-membership">
              <option value="non-musician">Non-Musician</option>
              <option value="musician">Musician</option>
              <option value="venue">Venue</option>
            </select>
          </div>
      </div>
    )
  }
}

class SignIn extends Component {
  render() {
    return(
      <div className='signInContainer'>
        <h1 className='headerText'>GigFindr</h1>
        <div className='inputSection'>
          <input type='text' className='userName' required/>
          <label className='inputLabel'>User Name</label>
        </div>
        <div className='inputSection'>
          <input type='text' className='password' required/>
          <label className='inputLabel'>Password</label>
        </div>
        
      </div>
    )
  }
}

export default function Post() {
  return (<App />);
}