import { MoreVert } from "@material-ui/icons"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/test-musician.png" alt="pfp" className="postProfileImg"/>
            <span className="postUsername">First Last</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">First Post</span>
          <img className="postImg" src="assets/test-post.png" alt="violin"/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postLikeImg" src="assets/like.png" alt="like icon"/>
            <span className="postLikeCount">5 people liked this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">2 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
