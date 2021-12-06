import "./rightbar.css"
import Suggested from "../suggested/Suggested";
import { Users } from "../../fabricatedData";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        
        <div className="friendsListDiv">
          <h4 className="rightbarTitle">Suggested Accounts</h4>
          
          <ul className="rightbarSuggestionList">
          {Users.map(u => (<Suggested key={u.id} user={u} />))}
          </ul>

        </div>

      </div>
    </div>
  )
}
