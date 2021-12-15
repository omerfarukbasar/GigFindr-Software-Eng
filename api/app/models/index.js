const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: Sequelize.Op,
  connectTimeout: 60000,
  //logging: false,     // Disables console.log

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModels.js")(sequelize, Sequelize);
db.posts = require("./postModels.js")(sequelize, Sequelize);
db.followingRelationship = require("./followingRelationshipModels.js")(sequelize, Sequelize);
db.postFavorites = require("./postFavoritesModels.js")(sequelize, Sequelize);
db.musicians = require("./musicianModels.js")(sequelize, Sequelize);

// Create relationships
db.users.hasMany(db.followingRelationship);
db.followingRelationship.belongsTo(db.users);
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);
db.posts.hasMany(db.postFavorites);
db.postFavorites.belongsTo(db.posts);
//db.users.hasMany(db.musicians);
//db.musicians.hasMany(db.users);

module.exports = db;