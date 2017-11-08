// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


<<<<<<< HEAD
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


=======
>>>>>>> 31de97abe859d8576065ddecf15d65d212477083
module.exports = function(app) {
//HTML Get Requests
//Below code handles when users 'visit' a page
//in each of the below cases the user is shown an HTML page of content


<<<<<<< HEAD
    app.get('/home', function (req, res){
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

    app.get('/survey', function (req, res){
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    app.post('/receive', function (req, res) {

        // All logic here

        function checkMost() {
            // Checking
        }



        function testing() {
            // testing
        }


        res.json("Ok");
    });


=======

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/app/public/survey.html'));
    });

    //If no matching route is found default to home
    app.get('*', function(req,res){
        res.sendFile(path.join(__dirname,'/app/public/home.html'));
    });
>>>>>>> 31de97abe859d8576065ddecf15d65d212477083
};