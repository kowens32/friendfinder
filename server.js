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
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Basic Route that sends the user
//==========================================
app.get('/home', function (req, res){
    res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survey', function (req, res){
    res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});




//Starts the server to begind listening
//======================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);

});