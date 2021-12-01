const db = require("../models");
const userModels = require("../models/userModels");
const Users = db.users;
const Op = db.Sequelize.Op;


// Validate a user
exports.login = (req, res) => {
  var userName = req.body.userName;
  var pass = req.body.password;

  if(userName == "Brenden" && pass == "Monteleone") 
    res.send('Success!');
  
  else
    res.send('Failed')
}

// Send login token
exports.token = (req, res) => {
  res.send({
    token: 'tokin420'
  });
};

// Create and Save a new user
exports.create = (req, res) => {
  
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    // SELECT id, userName FROM users
    Users.findAll({attributes: ['id', 'userName']},{ where: condition })
    	.then(data => {
        	res.send(data);
    	})
      	.catch(err => {
        	res.status(500).send({
          		message:
            	err.message || "Some error occurred while retrieving users."
        	});
      	});
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    // Select id, userName, firstName, lastName FROM users
    Users.findByPk(id, {attributes: ["id", "userName", "firstName", "lastName"]})
      .then(data => {
        if (data) {
         res.send(data);
        } 
        else {
          res.status(404).send({
            message: `Cannot find a user with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving a user with id=" + id
       });
      });
};

// Update a user by the id in the request
exports.update = (req, res) => {
  
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  
};

// Remove a single user from the database.
exports.remove = (req, res) => {
  
};
