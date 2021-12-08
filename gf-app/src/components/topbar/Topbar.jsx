import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

// Added a simple logout feature for debugging 
//  by clicking the profile image in top right
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">GigFindr</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search..." 
          className="searchInput" />
        </div>

      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Musicians</span>
          <span className="topbarLink">Venues</span>
          <span className="topbarLink">Music</span>
          <span className="topbarLink">Gigs</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/test-musician.png" alt="Man" className="topbarProfile" /*onClick={localStorage.removeItem("ID"), window.location="/Login"}*//>
      </div>
    </div>
  );
}
