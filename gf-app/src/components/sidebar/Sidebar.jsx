import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="card">
          <img src="/assets/test-musician.png" alt="Man" className="card-img"/>
          <h1>First Last</h1>
          <p class="title">@userName</p>
          <h2>Muscian/Venue</h2>
          <p>Instruments/Genre/"Scene"</p>
          <p><button>Visit Profile</button></p>
        </div>
        <div className="friendsListDiv">
          <hr className="sidebarHR" />
          <h4 className="sidebarTitle">Online Friends</h4>
          <ul className="friendsList">
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>

            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
            
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
            
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
            
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
           
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
           
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
           
            <li className="Friend">
              <div className="sidebarProfileImgContainer">
                <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                <span className="sidebarOnline"></span>
              </div>
              <span className="sidebarUsername">John Doe</span>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}


/*
HTML -- friends list

<ul className="friendsList">
  <li className="Friend">
    <img src="./assets/john-doe.png" alt="friend img" className="friendsImg"/>
    <span className="friendName">John Doe</span>
  </li>
  <li></li>
  <li></li>

CSS


*/