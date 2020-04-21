
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


app.use(express.static(path.join(__dirname, '../../build')))
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
});


app.get('/api/apiKey', function (req, res) {
    res.send(apiKey);
})

app.get('/api/clientId', function (req, res) {
    res.send(clientId);
})

app.get('/api/all', function (req, res) {
    var query = { userID: req.query.userID };
    selectFromDB(sendRes, query);
    function sendRes(result) {
        console.log(result)
        res.send(result);
    }
})

app.get('/api/search', function (req, res) {

    var regex = new RegExp("." + req.query.search + ".");
    var query = {
        $and: [
            {
                $or: [
                    { Description: regex },
                    { Item: regex },
                    { Name: regex },
                    { Preparation: regex }
                ]
            },
            { userID: req.query.userID }
        ]
    }

    selectFromDB(sendRes, query);
    function sendRes(result) {
        console.log(result)
        res.send(result);
    }
})

app.get('/api/byID', function (req, res) {
    console.log('server', req.query.id)
    var query = { _id: ObjectId( req.query.id), userID: req.query.userID };
    selectFromDB(sendRes, query);
    function sendRes(result) {
        res.send(result[0]);
    }
})

app.post('/api/add', function (req, res) {
    addToDB(sendRes, req.body.recipe)
    function sendRes(insertID) {
        res.send(insertID)
        res.status(200).end()
    }

})



function connectToDB(callback) {
    MongoClient.connect(uri, function (err, db) {
        if (!err) {
            console.log("connected");
            mydb = db
            dbo = db.db("recipes");
            callback(dbo.collection("recipes"))
        }
    })
}

function closeConnction() {
    if (mydb) {
        mydb.close();
        MongoClient.close;
    }
}

function selectFromDB(callback, query) {
    connectToDB(find)
    function find(collection) {
        collection.find(query).toArray(function (err, result) {
            if (err) throw err;
            callback(result)
            closeConnction()
        })
    }
}

function addToDB(callback, document) {
    connectToDB(insert)
    function insert(collection) {
        collection.insertOne(document, function (err, result) {
            if (err) throw err;
            console.log(result.insertedId.toString())
            callback(result.insertedId.toString())
            closeConnction()
        })
    }
}


