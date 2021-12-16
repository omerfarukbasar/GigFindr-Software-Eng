import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import { Route } from "react-router-dom";

// Fix this
function App() {
  // Check if a user is logged in
  if(localStorage.getItem("ID") != null)
    return (
      <Home>
        <Route path="/Home"/>
      </Home>
    );

  // Route users not logged in to sign-in page
  else
    return (
      <Login>
        <Route path='/Login'/>
      </Login>
    );
}

export default App;
