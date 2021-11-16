import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        
        <div className="friendsListDiv">
          <h4 className="rightbarTitle">Suggested Accounts</h4>
          
          <ul className="rightbarSuggestionList">
            <li className="suggestion">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="suggestion img" className="suggestionImg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
              <button className="followButton">+ Follow</button>
            </li>
           
            <li className="suggestion">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="suggestion img" className="suggestionImg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
              <button className="followButton">+ Follow</button>
            </li>
            
            <li className="suggestion">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="suggestion img" className="suggestionImg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
              <button className="followButton">+ Follow</button>
            </li>
            
            <li className="suggestion">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="suggestion img" className="suggestionImg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
              <button className="followButton">+ Follow</button>
            </li>
           
            <li className="suggestion">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="suggestion img" className="suggestionImg"/>
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe</span>
              <button className="followButton">+ Follow</button>
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}
