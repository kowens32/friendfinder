//Dependencies
//series of npm packages that we will use to give our server useful functionality
//==================================================
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

//EXPRESS CONFIGURATION
//Sets up the Express App basic properties
//=============================================
var app = express();
var PORT = process.env.PORT || 3000;


//Set up the express app to handle data parsing
//with extended set to true so it can handled nested JSON data
//================================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//ROUTER
//The below points our server to a series of 'route' files
//The routes give our server a 'map' of how to respond when users visit
//or request data from various URLs
//==========================================================
var routing = require('./app/routing/htmlRoutes');
routing(app)

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


//LISTENER
//Starts the server to begin listening
//==================================================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);

});