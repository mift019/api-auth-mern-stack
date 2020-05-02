const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const passport = require("passport");
const users = require("./routes/api/ApiUsers");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/connection_mongodb_atlas").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true, 
        useCreateIndex: true
    }
  )
  .then(() => console.log("MongoDB Atlas successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));