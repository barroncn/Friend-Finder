// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friends = require("../data/friends.js"); //Require the friends data array

function apiRoutes(app) {// Even though app isn't in scope here, we can call the function on a page where it IS in scope
    
    //If we want to .get to /api/friends...
    app.get("/api/friends", function(req, res) {
      //The friends array will be sent back as a JSON object 
      return res.json(friends);
    });
    
    //If we want to post to /api/friends....
    app.post("/api/friends", function(req, res){
        var newfriend = req.body; //This will be the newFriend object we create
        var userSum = req.body.sum; //The sum from the newFriend object
        var matchDiff = 50; //Set to an impossibly high number...MaxScore: 50, MinScore: 10, Thus MaxDiff = 40
        var index; //This will allow us to keep track of who in the array is the best match
        
        //Loop through the friends array
        //Note: if there are multiple friends who are equally compatable with the user, this method will select the FIRST friend in the array with the appropriate level of compatability (to get the LAST friend in the array, in the if statement we would use "<=")
        for(var i = 0; i < friends.length; i++){
            // diff is the absolute value of the difference between the users answer sum and the sum of the i-th friend in the array
            var diff = Math.abs(userSum - friends[i].sum);
            //If the most recent friend in the friends array has answers that are more similar to the users...
            if(diff < matchDiff){
                //Set matchDiff to the new difference
                matchDiff = diff;
                //Set the index equal to the current index (the index of our best match thus far)
                index = i;
            }
        }
        friends.push(newfriend); //Add the user's profile to the friends array
        res.json(friends[index]); //Respond to the client with the object of the best matched friend
        
        //Logging for test purposes:
        // console.log(matchDiff);
        // console.log("Match Name: " + friends[index].name);
        // console.log("Match Pic: " + friends[index].photo); 
    });
}

module.exports = apiRoutes; //Export the apiRoutes