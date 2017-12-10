// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends.js");

function apiRoutes(app) {
    app.get("/api/friends", function(req, res) {
      return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res){
        var newfriend = req.body;
        var userSum = req.body.sum;
        var matchDiff = 50;
        var index;
        //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newfriend);
    
        for(var i = 0; i < friends.length; i++){
            var diff = Math.abs(userSum - friends[i].sum);
            if(diff < matchDiff){
                matchDiff = diff;
                index = i;
            }
        }
        friends.push(newfriend);
        res.json(friends[index]);
        console.log(matchDiff);
        console.log("Match Name: " + friends[index].name);
        console.log("Match Pic: " + friends[index].photo); 
    });
}

module.exports = apiRoutes;