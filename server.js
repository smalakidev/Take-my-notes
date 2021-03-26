// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

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

//Our server gets started here

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
