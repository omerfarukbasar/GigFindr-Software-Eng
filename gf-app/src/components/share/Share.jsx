import React from "react";
import "./share.css"
import { PermMedia, LibraryMusic, Description, VideoLibrary, Room } from "@material-ui/icons"
const { Component } = React;

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
    this.state = {
      postContent: null
    }
  }

  handlePostUpdate(e) {
    if(this.state.postContent == "")
      this.setState({postContent: null})
    else
      this.setState({postContent: e.target.value})
  }

  submit() {
    //alert('Post will be posted soon enough!\nInput: '+this.state.postContent);
    // Create data to send to API
    var cred = {postContent: this.state.postContent};

    // Send to the API
    fetch('http://localhost:8443/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cred)
    })
      .then(response => response.json()) // was .json()
      .then(data => {
        // Debug
        //console.log(data);
        alert(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  render() {
    return (
      <div className="share">
        <div className="sharewrapper">
          <div className="shareTop">
            <img src="/assets/test-musician.png" alt="pfp" className="shareProfileImg"/>
            <input
              onChange={this.handlePostUpdate}
              name='postContent'
              placeholder="What's on your mind?"
              className="shareInput"
            />
          </div>
          <hr className="shareHR"/>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="orange" className="shareIcon" />
                <span className="shareOptionText">Photo</span>
              </div>
              <div className="shareOption">
                <VideoLibrary htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Video</span>
              </div>
              <div className="shareOption">
                <LibraryMusic htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Audio</span>
              </div>
              <div className="shareOption">
                <Description htmlColor="grey" className="shareIcon" />
                <span className="shareOptionText">File</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
            </div>
            <button onClick={this.submit.bind(this)} className="shareButton">Share</button>
          </div>
        </div>
      </div>
    )
  }
}

export default function Share() {
  return(<App />)
}
