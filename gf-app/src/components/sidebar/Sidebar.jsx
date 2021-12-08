import "./sidebar.css";

export default function Sidebar() {
  //console.log('http://localhost:8443/api/users/'+localStorage.getItem("ID"));
  fetch('http://localhost:8443/api/users/'+localStorage.getItem("ID"), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // An Error occurred, reroute back to login
      if(data.firstName == null)
        window.location = "/Login";

      // Account Found, return the page info
      else {
        var userName = data.userName;
        var firstName = data.firstName;
        var lastName = data.lastName;
        var userType = data.type;
        var profilePic = data.profilePic;

        // Insert stuff into divs
        document.getElementById("name").innerHTML = firstName + " " + lastName;
        document.getElementById("username").innerHTML = "@"+userName;
        document.getElementById("usertype").innerHTML = userType;
        //document.getElementById("profilepic").src = profilePic;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="card">
            <img id="profilepic" src="/assets/test-musician.png" alt="Man" className="card-img"/>
            <h1 id="name"></h1>
            <p class="title" id="username"></p>
            <h2 id="usertype"></h2>
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
                <span className="sidebarUsername">Will Torres</span>
              </li>
  
              <li className="Friend">
                <div className="sidebarProfileImgContainer">
                  <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                  <span className="sidebarOnline"></span>
                </div>
                <span className="sidebarUsername">Brenden Monteleone</span>
              </li>
              
              <li className="Friend">
                <div className="sidebarProfileImgContainer">
                  <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
                  <span className="sidebarOnline"></span>
                </div>
                <span className="sidebarUsername">Omer Basar</span>
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