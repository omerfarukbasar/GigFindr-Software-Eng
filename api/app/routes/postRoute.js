module.exports = app => {
    const posts = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Get all posts created by the user
    router.get('/', posts.getAllPosts);

    // Create a new post
    router.post('/create', posts.newPost);

    app.use('/api/posts', router);
};