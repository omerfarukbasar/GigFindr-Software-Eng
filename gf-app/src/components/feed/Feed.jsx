import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";
import { Component } from "react";
import reactDom from "react-dom";

// Throwing a bunch of TypeErrors, but still works?
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toReturn: null,
      sent: false
    }
  }

  getPosts() {
    var postArray = new Array();  
    console.log("Sent: " + this.state.sent);

    if(this.state.sent == false) {
      Promise.all([
        // Fetch posts from friends 
        fetch('http://localhost:8443/api/posts/getPosts/' + localStorage.getItem("ID") + '/friends', {
          method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        }),

        // Fetch posts from the user
        fetch('http://localhost:8443/api/posts/userPosts/' + localStorage.getItem("ID"), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })

      ])
        .then(function (responses) {
          // Get json from each fetch
          return Promise.all(responses.map(function (response) {
            return response.json();
          }));
        })
        .then((data) => {
          // Debug
          //console.log(data);

          // Create variables
          var friendPost = data[0];
          var userPost = data[1];

          //console.log(userPost);

          // Get Friend's posts (update to handle array of arrays)
          for(var i=0; i < friendPost.length; i++) {
            // Get objects
            var postObj = friendPost[i];
            var friendObj = friendPost[i].user;
      
            // Assign values to be passed through
            var accName = friendObj.firstName + " " + friendObj.lastName;
            var desc = postObj.content;
            var date = postObj.postDate;
            var postImg = postObj.image;
            var postID = postObj.id;
            var likeNum = "0";
            var commentNum = "0";
      
            // Create the post
            var post =  <Post
                          name={accName}
                          text={desc}
                          date={date}
                          postImg={postImg}
                          postID={postID}
                          likeNum={likeNum}
                          commentNum={commentNum}
                        />;
      
            // Insert post into list
            postArray.push(post);
          }

          // Get user's posts
          var newArray = [];
          for(var i=0; i < userPost.length; i++) {
            // Get objects
            var postObj = userPost[i].posts[0];
            var userObj = userPost[i];

            console.log(postObj);
      
            // Assign values to be passed through
            var accName = userObj.firstName + " " + userObj.lastName;
            var desc = postObj.content;
            var date = postObj.postDate;
            var postImg = postObj.image;
            var postID = postObj.id;
            var likeNum = "0";
            var commentNum = "0";

            // Create the post

            // Get the date
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            var todayDate = yyyy + '-' + mm + '-' + dd;

            // Only get the user's post for the feed if its new
            if(date == todayDate) {
              var post =  <Post
                            name={accName}
                            text={desc}
                            date={date}
                            postImg={postImg}
                            postID={postID}
                            likeNum={likeNum}
                            commentNum={commentNum}
                          />;
        
              // Insert post first into list
              newArray.push(post);

            }

          }

          postArray.forEach((post) => {
            newArray.push(post);
          })

          // Return posts
          //console.log(postArray);
          
          this.setState({toReturn: newArray, sent: true});
          
        })
        .catch(function (error) {
          // if there's an error, log it
          console.log(error);
        });

      }
      else {
        return(this.state.toReturn);
      }

      return(this.state.toReturn);
  }

  render() {
    return (
      <div class="feed">
        <div class="feedWrapper">
          <Share/>
          {this.getPosts()}
        </div>
      </div>
    );
  }

}

export default function Feed() {
  return (<App/>);
  
}
