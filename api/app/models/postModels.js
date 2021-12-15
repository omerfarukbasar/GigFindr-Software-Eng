module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts", {
      title: {
          type: Sequelize.STRING
      },
      content: {
          type:  Sequelize.STRING
      },
      image: {
          type: Sequelize.STRING
      },
      audio: {
          type: Sequelize.BLOB
      },
      postDate: {
          type: Sequelize.DATE
      },
      userID: {
          type: Sequelize.INTEGER
      }
    },
     {
      // Configurations

      // Don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // Remove createdAt
      createdAt: false,

      // Remove updatedAt
      updatedAt: false,
    });
  
    return Posts;
  };