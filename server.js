//Dependencies
//=============================================
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

//Sets up the Express App
//=============================================
var app = express();
var PORT = 3000;


//Set up the express app to handle data parsing
//==============================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());







//ROUTER
//The below points our server to a series of 'route' files
//The routes give our server a 'map' of how to respond when users visit
//or request data from various URLs
//==========================================================
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);


//LISTENER
//Starts the server to begin listening
//======================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);

});