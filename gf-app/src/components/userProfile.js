var UserProfile = (function() {
    var id = null;
  
    var getID = function() {
      return id;    // Or pull this from cookie/localStorage
    };
  
    var setID = function(theID) {
      id = theID;     
    };

    var clearID = function() {
        id = null;
    }

    var idSet = function() {
      if(id != null)
        return true
      else
        return false
    }
  
    return {
      getID: getID,
      setID: setID,
      clearID: clearID,
      idSet: idSet
    }
  
  })();
  
  export default UserProfile;