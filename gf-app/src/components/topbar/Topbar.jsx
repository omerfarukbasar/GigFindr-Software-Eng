import "./topbar.css"
import { Search, Person, Chat, Notifications, AddToHomeScreen } from "@material-ui/icons"
import { Component } from "react";

// Added a simple logout feature for debugging 
//  by clicking the profile image in top right
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "/assets/test-musician.png"
    }

    fetch('http://localhost:8443/api/users/'+localStorage.getItem("ID"), {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(response => response.json()) // was .json()
    .then(data => {
      if(data.profilePic == null) {}
      else
        this.setState({profilePic: data.profilePic});
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }


  toHome() {
    window.location = "/Home";
  }

  toMusicians() {
    alert("Musician's page coming soon!");
  }

  toVenues() {
    alert("Venue's page coming soon!");
  }

  toMusic() {
    alert("Music page coming soon!");
  }

  toGigs() {
    alert("Gigs page coming soon!");  
  }

  showPerson() {
    alert("Will be implemented in the future.");
  }

  showMessages() {
    alert("DM's will be implemented in the future.");
  }

  showNotifications() {
    alert("Notifications will be implemented in the future.");
  }

  logOut() {
    localStorage.removeItem("ID");
    window.location = "/Login";
  }

  render() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">GigFindr</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search..." 
            className="searchInput" />
          </div>
  
        </div>
  
        <div className="topbarRight">
          <div className="topbarLinks">
            <span onClick={this.toHome.bind(this)} className="topbarLink">Home</span>
            <span onClick={this.toMusicians.bind(this)} className="topbarLink">Musicians</span>
            <span onClick={this.toVenues.bind(this)} className="topbarLink">Venues</span>
            <span onClick={this.toMusic.bind(this)} className="topbarLink">Music</span>
            <span onClick={this.toGigs.bind(this)} className="topbarLink">Gigs</span>
          </div>
          <div className="topbarIcons">
            <div onClick={this.showPerson.bind(this)} className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div onClick={this.showMessages.bind(this)} className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">3</span>
            </div>
            <div onClick={this.showNotifications.bind(this)} className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img onClick={this.logOut.bind(this)} src={this.state.profilePic} alt="Man" className="topbarProfile" /*onClick={localStorage.removeItem("ID"), window.location="/Login"}*//>
        </div>
      </div>
    );
  }
}

export default function Topbar() {
  return (<App/>);
}
