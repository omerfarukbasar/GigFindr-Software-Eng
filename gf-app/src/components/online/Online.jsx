import "./online.css"

export default function Online({user}) {
  return (
  <li className="Friend">
    <div className="sidebarProfileImgContainer">
      <img src={user.profilePicture} alt="friend img" className="friendsImg"/>
      <span className="sidebarOnline"></span>
    </div>
    <span className="sidebarUsername">{user.username}</span>
  </li>
  )
}
