// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

//Mongoose is imported here
const mongoose = require("mongoose");
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// This passes data from our front end to our back end and withough these 
//two lines, we wouldn't be able to do that
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//Forming a connection to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});


//Our server gets started here
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});