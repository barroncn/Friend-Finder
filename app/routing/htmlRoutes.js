// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require("path"); //Require "path" so we can easily chain our html paths

function htmlRoutes(app) { //Even though app is not defined here, we can pass it into the function on a page where it IS in scope
    
    //If the user wants to .get to /survey...
    app.get("/survey", function(req, res) {
      //The html for the survey page is sent back to the client
      return res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    //If the user wants to .get the homepage (or types in anything after the root "/" that is not defined...)
    app.get("/:otherStuff?", function(req, res){
      //The html for the home page is sent back to the client
      return res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

module.exports = htmlRoutes; //Export the htmlRoutes