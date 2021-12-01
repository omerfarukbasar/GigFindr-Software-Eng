module.exports = app => {
    const auth = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    router.post('/', auth.login);

    router.get('/token', auth.token);

    app.use('/api/login', router);
};
