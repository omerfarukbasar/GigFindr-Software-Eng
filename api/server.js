const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// DB Connection
const db = require("./app/models");
db.sequelize.sync();

// Base Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to monteleone application." });
});

// Other routes
require("./app/routes/userRoute.js")(app);

require("./app/routes/loginRoute.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8443;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});