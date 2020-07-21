var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://localhost:27017/recipes';
const assert = require('assert');
const fs = require('fs');
let mydb
const { ObjectId } = require('mongodb');
const RECIPES_COLLECTION = "recipes"
const USERS_COLLECTION = "users"

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

app.get('/api/all', function (req, res) {
    var query = { userID: req.query.userID };
    selectFromDB(sendRes, query, RECIPES_COLLECTION);
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

    selectFromDB(sendRes, query, RECIPES_COLLECTION);
    function sendRes(result) {
        res.send(result);
    }
})

app.get('/api/byID', function (req, res) {
    console.log('server', req.query.id)
    var query = {
        $and: [{ _id: ObjectId(req.query.id) }, { userID: req.query.userID }]
    }

    selectFromDB(sendRes, query, RECIPES_COLLECTION);
    function sendRes(result) {
        res.send(result[0]);
    }
})

app.post('/api/add', function (req, res) {
    addToDB(sendRes, req.body.recipe, RECIPES_COLLECTION)
    function sendRes(insertID) {
        res.send(insertID)
        res.status(200).end()
    }
})

app.post('/api/addUser', function (req, res) {
    createOrUpdate(sendRes, req.body.user, USERS_COLLECTION)
    function sendRes(result) {
        res.send(result)
        res.status(200).end()
    }
})

function connectToDB(callback, collectionName) {
    MongoClient.connect(uri, function (err, db) {
        if (!err) {
            console.log("connected");
            mydb = db
            dbo = db.db("recipes");
            callback(dbo.collection(collectionName))
        }
    })
}

function closeConnction() {
    if (mydb) {
        mydb.close();
        MongoClient.close;
    }
}

function selectFromDB(callback, query, collectionName) {
    connectToDB(find, collectionName)
    function find(collection) {
        collection.find(query).sort( { Date: -1 } ).toArray(function (err, result) {
            if (err) throw err;
            callback(result)
            closeConnction()
        })
    }
}

function addToDB(callback, document, collectionName) {
    connectToDB(insert, collectionName)
    function insert(collection) {
        document.Date = Date()
        collection.insertOne(document, function (err, result) {
            if (err) throw err;
            console.log(result.insertedId.toString())
            callback(result.insertedId.toString())
            closeConnction()
        })
    }
}

function createOrUpdate(callback, user, collectionName) {
    connectToDB(findAndModify, collectionName)
    function findAndModify(collection) {
        collection.findAndModify(
            { userID: user.userID },
            [['_id', 'asc']],
            { $setOnInsert: { Name: user.Name, Email: user.Email } },
            { new: true, upsert: true },
            function (err, result) {
                if (err) throw err;
                callback(result)
                closeConnction()
            }
        )
    }
}


