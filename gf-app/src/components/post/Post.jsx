import { MoreVert } from "@material-ui/icons"
import "./post.css"
import { Users } from "../../fabricatedData";
import { useState } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isliked, setisLiked] = useState(false)
  const likeHandler =()=> {
    setLike(isliked ? like-1 : like+1)
    setisLiked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u=> u.id === post.userID)[0].profilePicture} alt="pfp" className="postProfileImg"/>
            <span className="postUsername">{Users.filter(u=> u.id === post.userID)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="violin"/>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postLikeImg" src="assets/like.png" alt="like icon" onClick={likeHandler}/>
            <span className="postLikeCount">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
