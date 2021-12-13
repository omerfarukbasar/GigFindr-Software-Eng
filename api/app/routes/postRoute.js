module.exports = app => {
    const posts = require("../controllers/controller.js");
  
    var router = require("express").Router();

    // Get all posts (Friends vs. Strangers)
    router.get('/getPosts/:id/:type', posts.getAllPosts);

    // Get all posts created by the user
    router.get('/userPosts/:id', posts.getUserPosts);

    // Get number of likes based on postID
    router.get('/getLikes/:id', posts.getLikes);

    // Get comments based on postID
    router.get('/getComments/:id', posts.getComments);

    // Create a new post
    router.post('/create', posts.newPost);

    app.use('/api/posts', router);
};