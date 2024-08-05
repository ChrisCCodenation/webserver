const express = require("express");
// This is ES5 syntax required. Can't use import yet.
const app = express();
// Just for convention to remap to be called app.

app.use("/", express.static("website1"));

app.use("/website2", express.static("website2"));

app.listen(5001, () => {console.log("Listening on port 5001")});
// First parameter is port to listen on and second paremter is a function to execute when the server starts.

