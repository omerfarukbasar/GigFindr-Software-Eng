import "./share.css"
import { PermMedia, LibraryMusic, Description, VideoLibrary, Room } from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop">
          <img src="/assets/test-musician.png" alt="pfp" className="shareProfileImg"/>
          <input
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
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
