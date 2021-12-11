module.exports = (sequelize, Sequelize) => {
    const PostFavorites = sequelize.define("postFavorites", {
      postID: {
          type: Sequelize.INTEGER
      },
      userID: {
          type: Sequelize.INTEGER
      },
      likeDate: {
          type: Sequelize.DATE
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

      // Set the model name
      tableName: 'postFavorites'
    });
  
    return PostFavorites;
  };