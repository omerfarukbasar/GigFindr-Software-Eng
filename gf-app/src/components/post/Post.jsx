import { MoreVert } from "@material-ui/icons"
import { Component } from "react"
import "./post.css"

// Figure out how to implement post likes to specific posts
export default function Post(postContent) {
  var postID = postContent.postID;

  // Needs Work
  function getLikes(postID) {
    var likeCount = 0;
    var likesCounted = false;

    // Fetch the comments and likes associated with the post based on ID
    Promise.all([
      // Likes
      fetch('http://localhost:8443/api/posts/getLikes/'+postID, {
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
        var likes = data[0];

        if(!likesCounted) {
          likesCounted = true;

          likes.forEach(like => {
            likeCount = likeCount + 1;
          });

          console.log("ID: "+postID+"\nLikes: "+likeCount);
          document.getElementById("like").innerHTML += likeCount + " people liked this";
        }
      })
      .catch(function (error) {
        // if there's an error, log it
        console.log(error);
      });
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/test-musician.png" alt="pfp" className="postProfileImg"/>
            <span className="postUsername">{postContent.name}</span>
            <span className="postDate">{postContent.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{postContent.text}</span>
          <img className="postImg" src={postContent.postImg}/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postLikeImg" src="assets/like.png" alt="like icon"/>
            <span id="like" className="postLikeCount">{postContent.likeNum}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{postContent.commentNum} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
