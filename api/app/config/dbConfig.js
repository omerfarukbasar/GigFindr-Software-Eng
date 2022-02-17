module.exports = {
    HOST: "127.0.0.1",
    USER: "wtorr", // your username
    PASSWORD: "ReggieWatts", // your password
    DB: "GIGFINDER",
    PORT: "3306",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 60000
    }
  };
