import "./sidebar.css";

export default function Sidebar() {
  // https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/
  Promise.all([
    fetch('http://localhost:8443/api/users/'+localStorage.getItem("ID"), {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }
    }),
    fetch('http://localhost:8443/api/users/getFriends/'+localStorage.getItem("ID"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  ])
    .then(function (responses) {
      // Get json from each fetch
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    })
    .then(function (data) {
      // Debug
      //console.log(data[0]);
      //console.log(data[1]);

      var userData = data[0];
      var friendData = data[1];

      // An Error occurred, reroute back to login
      if(userData.firstName == null)
        window.location = "/Login";

      // Account Found, return the page info
      else {
        var userName = userData.userName;
        var firstName = userData.firstName;
        var lastName = userData.lastName;
        var userType = userData.type;
        var profilePic = userData.profilePic;

        // Insert user-related stuff into divs
        document.getElementById("name").innerHTML = firstName + " " + lastName;
        document.getElementById("username").innerHTML = "@"+userName;
        document.getElementById("usertype").innerHTML = userType;
        //document.getElementById("profilepic").src = profilePic;

        // Add the visit profile button
        var p = document.getElementById("profileButton");

        if(p.childNodes.length > 0) {}
        else {
          // Add functionality to profile button
          var button  = document.createElement("button");
          button.innerHTML = "Visit Profile";
          button.onclick = function() {
            alert("Profiles will be implemented soon!")
          };
          p.appendChild(button);
        }

        // Display friends 
        var list = document.getElementById("friendList");

        if(list.childNodes.length > 0) {}
        else {
          friendData.forEach((friend) => {
            // Create components to the list element
            let div = document.createElement("div");
            div.className = "sidebarProfileImgContainer";

            let img = document.createElement("img");
            img.src = "/assets/john-doe.jpg";
            img.alt = friend.firstName + "'s Image";
            img.className = "friendsImg";
            /*
            let innerSpan = document.createElement("span");
            innerSpan.className = "sidebarOnline";
            */
            let outerSpan = document.createElement("span");
            outerSpan.className = "sidebarUsername";
            outerSpan.innerHTML = friend.firstName + " " + friend.lastName;

            let li = document.createElement("li");
            li.className = "Friend";

            // Start creating everything
            div.appendChild(img);
            //div.appendChild(innerSpan);

            li.appendChild(div);
            li.appendChild(outerSpan);

            // Merge everything to main list
            list.appendChild(li);
          })//end forEach
        }
      }
    })
    .catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });

    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="card">
            <img id="profilepic" src="/assets/test-musician.png" alt="Man" className="card-img"/>
            <h1 id="name"></h1>
            <p class="title" id="username"></p>
            <h2 id="usertype"></h2>
            <p>Instruments/Genre/"Scene"</p>
            <p id="profileButton"></p>
          </div>
          <div className="friendsListDiv">
            <hr className="sidebarHR" />
            <h4 className="sidebarTitle">Friends</h4>
            <ul id="friendList" className="friendsList">
              
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

<li className="Friend">
  <div className="sidebarProfileImgContainer">
    <img src="/assets/john-doe.jpg" alt="friend img" className="friendsImg"/>
    <span className="sidebarOnline"></span>
  </div>
  <span className="sidebarUsername">Will Torres</span>
</li>

CSS


*/