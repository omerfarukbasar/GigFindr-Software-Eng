module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      password:  {
        type: Sequelize.STRING
      },
      profilePic: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      address: {
          type: Sequelize.STRING
      },
      city: {
          type: Sequelize.STRING
      },
      state: {
          type: Sequelize.STRING
      },
      zip: {
          type: Sequelize.INTEGER
      },
    }, {
      // Configurations

      // Don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // Remove createdAt
      createdAt: false,

      // Remove updatedAt
      updatedAt: false,
    });
  
    return Users;
  };