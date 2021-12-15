module.exports = (sequelize, Sequelize) => {
    const Musicians = sequelize.define("musicians", {
        age: {
            type: Sequelize.INTEGER
        },
        yearOfExperience: {
            type: Sequelize.INTEGER
        },
        talentList: {
            type: Sequelize.STRING
        },
        userID: {
            type: Sequelize.INTEGER
        }
    }, {
        // Configurations

      // Don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // Remove createdAt
      createdAt: false,

      // Remove updatedAt
      updatedAt: false,

      // Set the model name
      tableName: 'followingRelationship'
    });

    return Musicians;
}