// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
var path = require("path"); 

function htmlRoutes(app) {
    app.get("/survey", function(req, res) {
      return res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("/", function(req, res){
        return res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

module.exports = htmlRoutes;