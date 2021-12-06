import "./suggested.css"

export default function Suggested({user}) {
  return (
  <li className="suggestion">
    <div className="rightbarProfileImgContainer">
      <img src={user.profilePicture} alt="suggestion img" className="suggestionImg"/>
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
    <button className="followButton">+ Follow</button>
  </li>
  )
}
