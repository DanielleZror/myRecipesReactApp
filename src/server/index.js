
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://localhost:27017/recipes';
const assert = require('assert');
const fs = require('fs');
let mydb
const {ObjectId} = require('mongodb'); 
const apiKey = 'AIzaSyDwEjpZAX4FpLlsPEQbu7QxTPbwOSBmxVU'
const clientId = '328129129619-hb9ssc9ajkdqrfr82dsmtn27jhkjrqdj.apps.googleusercontent.com'


app.use(express.static('../../../public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

const text = path.join(__dirname + '../../../public/index.html');

// viewed at http://localhost:8000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/index.html'));
});

app.listen(8000, function () {
    console.log(text)
    console.log("Listening on port " + 8000)
});
