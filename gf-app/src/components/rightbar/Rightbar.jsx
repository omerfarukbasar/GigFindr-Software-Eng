import "./rightbar.css"

export default function Rightbar() {
  function followAccount(friendID) {
    fetch('http://localhost:8443/apiu/users/addFriend/'+localStorage.getItem("ID")+'/'+friendID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json()) // was .json()
    .then(data => {
      if(data.added) {
        alert('Added!');
        window.location = "/Home";
      }
      else {
        alert('Something went wrong');
      }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    })

  }

  fetch('http://localhost:8443/api/users/getPeople/'+localStorage.getItem("ID")+'/null', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json()) // was .json()
    .then(data => {
      // Debug
      //console.log(data);

      // Display suggested accounts
      var list = document.getElementById("suggested");

      if(list.childNodes.length > 0) {}
      else {
        data.forEach((account) => {
          // Create account name variable
          var accountName = account.firstName + " " + account.lastName;
          var accountID = account.id;

          // Create components
          let div = document.createElement("div");
          div.className = "rightbarProfileImgContainer";

          let img = document.createElement("img");
          img.src = "/assets/john-doe.jpg";
          img.alt = "suggestion img";
          img.className = "suggestionImg";
          /*
          let innerSpan = document.createElement("span");
          innerSpan.className = "rightbarOnline";
          */
         let outerSpan = document.createElement("span");
         outerSpan.className = "rightbarUsername";
         outerSpan.innerHTML = accountName;

         let button = document.createElement("button");
         button.className = "followButton";
         button.innerHTML = "+ Follow";
         //button.onclick = function() {alert(accountName + ' will be added soon!\nID: '+accountID)};

         button.onclick = function() {
          fetch('http://localhost:8443/api/FR/add/'+localStorage.getItem("ID")+'/'+accountID, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json()) // was .json()
            .then(data => {
              if(data.added) {
                alert('Added!');
                window.location = "/Home";
              }
              else {
                alert('Something went wrong');
              }
              
            })
            .catch((error) => {
              console.error('Error:', error);
            })
         };

         let li = document.createElement("li");
         li.className = "suggestion";

         // Create everything
         div.appendChild(img);
         //div.appendChild(innerSpan);
         li.appendChild(div);
         li.appendChild(outerSpan);
         li.appendChild(button);

         list.appendChild(li);
        })
      }

    })
    .catch((error) => {
      console.error('Error:', error);
    })

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        
        <div className="friendsListDiv">
          <h4 className="rightbarTitle">Suggested Accounts</h4>
          
          <ul id="suggested" className="rightbarSuggestionList">

          </ul>

        </div>

      </div>
    </div>
  )
}

/*
<li className="suggestion">
  <div className="rightbarProfileImgContainer">
    <img src="/assets/john-doe.jpg" alt="suggestion img" className="suggestionImg"/>
    <span className="rightbarOnline"></span>
  </div>
  <span className="rightbarUsername">John Doe</span>
  <button className="followButton">+ Follow</button>
</li>
*/