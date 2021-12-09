import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route } from "react-router-dom";
import "./components/userProfile";
import UserProfile from "./components/userProfile";

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
