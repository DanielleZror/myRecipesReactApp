const API = require('./Api')
var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var path = require('path');
// const assert = require('assert');


app.use(express.static(path.join(__dirname, '../../build')))
app.use('/images/', express.static(path.join(__dirname, '../../uploads')))
app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));


// viewed at http://localhost:8000
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.listen(8000, function () {
    console.log("Listening on port " + 8000)
    API.initApi(app)
});




