module.exports = app => {
    const users = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Users
    router.get("/", users.findAll);

    // Retrieve a single user
    router.get("/:id", users.findOne);

    // Create a user
    router.post("/create", users.create);

    // Get friend list based on user ID
    router.get("/getFriends/:id", users.findFriends);

    // Get people who aren't friends with the user
    router.get("/getPeople/:id/:type", users.getPeople);

    app.use('/api/users', router);
};