import "./userpage.css"

import React from 'react'
import Topbar from "../../components/topbar/Topbar"

export default function UserPage() {
  return (
    <div>
      <>
      <Topbar/>

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

      <div className="profileContainer">
        <div class="row">
          <div class="column">
            <div class="card">
              <h3>Card 1</h3>
              <img id="profile-pic" src="" alt="user-pfp" className="card-img"/>
              <h1 id="name">First Last</h1>
              <p class="title" id="username">username</p>
              <h2 id="usertype">Musician/Venue</h2>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Card 2</h3>
              <img id="profile-pic" src="" alt="user-pfp" className="card-img"/>
              <h1 id="name">First Last</h1>
              <p class="title" id="username">username</p>
              <h2 id="usertype">Musician/Venue</h2>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <h3>Card 3</h3>
              <img id="profile-pic" src="" alt="user-pfp" className="card-img"/>
              <h1 id="name">First Last</h1>
              <p class="title" id="username">username</p>
              <h2 id="usertype">Musician/Venue</h2>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <h3>Card 4</h3>
              <img id="profile-pic" src="" alt="user-pfp" className="card-img"/>
              <h1 id="name">First Last</h1>
              <p class="title" id="username">username</p>
              <h2 id="usertype">Musician/Venue</h2>
            </div>
          </div>
        </div>
      </div>
      </>
    </div>
  )
}
