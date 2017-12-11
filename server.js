// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080; 

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'applicaiton/**json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.json({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// lets us access the css file (if we had external client side js files we'd do this for them too...)
//app.use('/static', express.static(path.join(__dirname, './css/style.css')));
app.use(express.static('./app/public'));

// Routes
// =============================================================

//call the routes we made in the other .js files and pass in the in-scope express function 
apiRoutes(app);
htmlRoutes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});