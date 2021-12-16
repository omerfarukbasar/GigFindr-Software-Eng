module.exports = (sequelize, Sequelize) => {
    const Venues = sequelize.define("venue", {
        capacity: {
            type: Sequelize.INTEGER
        },
        vibe: {
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
      tableName: 'venue'
    });

    return Venues;
}
