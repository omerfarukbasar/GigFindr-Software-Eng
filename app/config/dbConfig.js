module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "9121",
    DB: "GIGFINDR",
    PORT: "8080",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 60000
    }
  };