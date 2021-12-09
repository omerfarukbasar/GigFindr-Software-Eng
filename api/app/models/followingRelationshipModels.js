module.exports = (sequelize, Sequelize) => {
    const followingRelationship = sequelize.define("followingRelationship", {
        userID: {
            type: Sequelize.INTEGER
        },
        followerID: {
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

    return followingRelationship;
}