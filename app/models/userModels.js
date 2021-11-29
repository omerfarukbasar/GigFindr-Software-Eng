module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      userName: {
        type: Sequelize.STRING
      },
      password:  {
        type: Sequelize.STRING
      },
      profilePic: {
        type: Sequelize.BLOB
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
          type: Sequelize.STRING
      }
    });
  
    return Users;
  };