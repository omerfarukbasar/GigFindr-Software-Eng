const { json, QueryTypes } = require("sequelize/dist");
const db = require("../models");
const userModels = require("../models/userModels");
const postModels = require("../models/postModels");
const { sequelize, users, Sequelize } = require("../models");
const Users = db.users;
const Posts = db.posts;
const FR = db.followingRelationship;
const Op = db.Sequelize.Op;

// ==== USER STUFF ====//

// Validate a user to login
exports.login = (req, res) => {
  try {
    // Collect the username and password from the form
    var jsonObj = req.body; 
    var userName = jsonObj.username;
    var pass = jsonObj.password;
    //res.send("Username: " + userName + "; Password: " + pass);

    // Validate if user's in the database (SELECT id, firstName FROM USERS WHERE username = 'userName' AND password = 'pass')
    Users.findOne({
        where: {
          [Op.and]: [
            {username: userName}, 
            {password: pass}
          ]
        }, 
          attributes: ['id', 'firstName']
      }
    )
      .then(data => {
        if(data) {
          // Send results back to front-end
          res.send(data);
        }
        else {
          res.status(404).send({
            message: `Cannot find user with the username=${userName}.`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving a user with the username=" + userName
        })
      })

  }
  catch(e) {
    res.send(e)
  }
}

// Send a login token
exports.token = (req, res) => {
  res.send({
    token: 'tokin420'
  });
};

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Check if a user exists with that userName
  Users.findOne({
    where: {
      [Op.or]: [
        {username: req.body.userName}
      ]
    }, 
      attributes: ['id']
  })
    .then(data => {
      if(data) {
        // Send messgae back to front-end
        res.send({message: "That username is already taken!"});
      }
      else {
        // Create the user
        const user = {
          username: req.body.userName,
          password: req.body.password,
          profilePic: null,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          type: req.body.userType,
          address: "",
          city: "",
          state: "",
          zip: 00000
        };

        // Save user to db
        Users.create(user)
        .then(data => {
          // Send confirmation message
          res.send({message: "Account Created! Login to continue."});
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });

      }//end else

    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving a user with the username=" + userName
      })
    })
};

// Retrieve all users from the database
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

    // Select id, userName, firstName, lastName FROM users WHERE userID = id
    Users.findByPk(id, {attributes: ["id", "userName", "firstName", "lastName", "type", "profilePic"]})
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

// Find the friends of a specific user
exports.findFriends = (req, res) => {
  const theID = req.params.id;

  // SELECT firstName, lastName FROM users INNER JOIN followingRelationship
  //  WHERE followingRelationship.followerID = users.userID
  //  AND followingRelationship.uesrID = :id;
  Users.findAll({
    attributes: ['firstName', 'lastName'],
    include: [{
      model: FR,
      attributes: [],
      on: {
        followerID: sequelize.where(sequelize.col("users.id"), "=", sequelize.col("followingRelationships.followerID")),
      },
      where: {
        userID: theID
      }
    }],
  })
    .then(data => {
      if (data) {
        res.send(data);
      } 
      else {
        res.status(404).send({
          message: `Cannot find a user with id=${theID}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send(
        err
      );
    });
}

// Retrieve people who aren't friends with user (Update)
exports.getPeople = (req, res) => {
  // Gather data from url
  const userID = req.params.id;
  const type = req.params.type;
  
  // SELECT DISTINCT firstName, lastNam FROM users WHERE users.id != :id 
  //  AND users.id NOT IN (
  //    SELECT user.id FROM users join followingRelationship
  //    WHERE followingRelationship.followerID = users.id
  //    AND followingRelationship.userID = 2
  //  );
  Users.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('firstName')) ,'firstName'],
      'lastName'
    ],
    distinct: true,
    where: {
      [Op.and]: [
        {id: {[Op.not]: userID}},
        {id: {
          [Op.notIn]: sequelize.literal(
            '(SELECT users.id FROM users JOIN followingRelationship ' +
            ' WHERE followingRelationship.followerID = users.id ' +
            ' AND followingRelationship.userID = ' + userID + 
            ')'
          )
        }
      }]
    },
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(
        err
      );
    });
}

// Update a user by id 
exports.update = (req, res) => {
  
};

// Delete a user with id
exports.delete = (req, res) => {
  
};

// ==== POST STUFF ====//

// Create a new post
exports.newPost = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Determine what to post (pic, audio, text, etc.)
  // Text only <= add more conditions
  if(req.body.postContent != null && req.body.postContent != "") {
    // Create the post
    res.send({message: "Post will be posted soon enough!\nInput: " + req.body.postContent});
  }
  else {
    res.send({message: "You must enter something to post!"});
  }
}

// Retrieve all posts (for feed?)
exports.getAllPosts = (req, res) => {
  res.send({message: "In Progress.."});
}

// Retrieve all posts made by a specific user
exports.getUserPosts =  (req, res) => {
  
}