
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends

//LOAD DATA
//We are linking our routes to a series of 'data; sources
//these data sources hold array of information on friends data
//==================================================
var scoresArray = require('../data/friends.js');

//===============================================
//ROUTING
//=============================================

module.exports = function(app) {

    //API GET Requests
    //below code handles when users 'visit' a page.
    //in each of the below cases when a user visits a link
    //=================================================

    app.get('/api/friends', function(req,res){
        res.json(scoresArray)
    });

    //API POST Requests
    //Below code handles when a user submits a form and thus submits data to the server
    //In each of the cases, when a user submits form data(a JSON object)
    //...the JSON is pushed to the appropriate JavaScript array
    //EX: user fills out the survey, data is sent to the server
    //then the serves saves the data to the tableData array)
    //=====================================================

    app.post('/api/friends', function (req, res) {

        //set variables parsed from the JSON object from the survey
       var survery = req.body;
       var surveryScores = req.body.scores;

       //set object to hold the best match
       var match = {
           name: '',
           photo: '',
           difference: 100
       };

       //compares scores between those in the database and the latest user survey
       var initialDifference = 0;

       //loop through the database for the friends
        for (i = 0; i < scoresArray.length; i++){

            //loop within those friends for the scores
            for (var i = 0; i < scoresArray[i].scores[i]; i++){


        initialDifference += Math.abs(parseInt(surveryScores[i] - parseInt(scoresArray[i].scores[i])));

        if(initialDifference <= match.difference) {
            match.name = scoresArray[i].name;
            match.photo = scoresArray[i].photo;
            match.difference = initialDifference;
        }
            }

        }

        scoresArray.push(req.body);

        res.json(match);
    })








}

// app.post('/receive', function (req, res) {
//
//     // All logic here
//
//     function checkMost() {
//         // Checking
//     }
//
//
//
//     function testing() {
//         // testing
//     }
//
//
//     res.json("Ok");
// });