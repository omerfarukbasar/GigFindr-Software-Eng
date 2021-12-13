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

  uploadPhoto() {
    alert("Uploading photos will be implemented soon.");
  }

  uploadVideo() {
    alert("Uploading videos will be implemented soon.");
  }

  uploadAudio() {
    alert("Uploading audio will be implemented soon.");
  }

  uploadFile() {
    alert("Uploading files will be implemented soon.");
  }

  addLocation() {
    alert("Adding locations to posts will be implemented soon.");
  }

  submit() {
    //alert('Post will be posted soon enough!\nInput: '+this.state.postContent);
    // Create data to send to API
    var cred = {content: this.state.postContent, id: localStorage.getItem("ID")};

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
        
        // Check message
        if(!data.sent)
          alert('You must enter something to post!');
        else
          window.location.reload();
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
              <div onClick={this.uploadPhoto.bind(this)} className="shareOption">
                <PermMedia htmlColor="orange" className="shareIcon" />
                <span className="shareOptionText">Photo</span>
              </div>
              <div onClick={this.uploadVideo.bind(this)} className="shareOption">
                <VideoLibrary htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Video</span>
              </div>
              <div onClick={this.uploadAudio.bind(this)} className="shareOption">
                <LibraryMusic htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Audio</span>
              </div>
              <div onClick={this.uploadFile.bind(this)} className="shareOption">
                <Description htmlColor="grey" className="shareIcon" />
                <span className="shareOptionText">File</span>
              </div>
              <div onClick={this.addLocation.bind(this)} className="shareOption">
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
  return(<App />);
}
