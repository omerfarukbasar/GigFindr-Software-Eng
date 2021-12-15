module.exports = app => {
    const FR = require("../controllers/controller.js");

    var router = require("express").Router();

    // Retrieve all Users
    router.get("/");

    router.post("/add/:id/:otherID", FR.addFriend);

    app.use('/api/FR', router);
}   
