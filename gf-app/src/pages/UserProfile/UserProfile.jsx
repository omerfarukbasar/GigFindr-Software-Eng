import React from "react";
const { Component } = React;

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="userProfile">
                <div className="card">
                    <img id="profilepic" src="/assets/test-musician.png" alt="user-pfp" className="card-img"/>
                    <h1 id="name">First Last</h1>
                    <p class="title" id="username">username</p>
                    <h2 id="usertype">Musician/Venue</h2>
                </div>
                <div className="coming-soon">
                    <p className="coming-soon-text">Feature Coming Soon! Thanks for your patience :)</p>
                </div>
            </div>
        )
    }
}

export default function UserProfile() {
    return (<App />);
  
}