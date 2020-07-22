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
const SAVED_COLLECTION = "savedRecipes"

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

app.get('/api/recipe/allByUser', function (req, res) {
    let match = { $match: { userID: req.query.userID } };
    let query = createJoinQuery(match)
    selectWithJoinFromDB(sendRes, query, RECIPES_COLLECTION)
    function sendRes(result) {
        res.send(result);
        res.status(200).end()
    }
})

app.get('/api/recipe/allSavedByUser', function (req, res) {
    let query = createSavedQuery(req.query.userID)
    selectWithJoinFromDB(sendRes, query, RECIPES_COLLECTION)
    function sendRes(result) {
        res.send(result);
        res.status(200).end()
    }
})

app.get('/api/allRecipes', function (req, res) {
    let query = createJoinQuery({});
    selectWithJoinFromDB(sendRes, query, RECIPES_COLLECTION)
    function sendRes(result) {
        res.send(result);
        res.status(200).end()
    }
})

app.get('/api/search', function (req, res) {
    //TODO change from selectFronDb to selectWithJoinFromDB
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

app.get('/api/recipe/recipeByID', function (req, res) {
    let match = { $match: { $and: [{ _id: ObjectId(req.query.id) }, { userID: req.query.userID }] } }
    let query = createJoinQuery(match)
    selectWithJoinFromDB(sendRes, query, RECIPES_COLLECTION);
    function sendRes(result) {
        res.send(result[0]);
    }
})

app.post('/api/recipe/add', function (req, res) {
    addToDB(sendRes, req.body.recipe, RECIPES_COLLECTION)
    function sendRes(insertID) {
        res.send(insertID)
        res.status(200).end()
    }
})

app.post('/api/recipe/likeRecipe', function (req, res) {
    let query = { userID: req.body.like.userID, recipeID: ObjectId(req.body.like.recipeID) }
    addToDB(sendRes, query, SAVED_COLLECTION)
    function sendRes(insertID) {
        res.send(insertID)
        res.status(200).end()
    }
})

app.post('/api/recipe/unlikeRecipe', function (req, res) {
    let recipeID = ObjectId(req.body.unlike.recipeID)
    let query = { $and: [{ userID: req.body.unlike.userID }, { recipeID: recipeID }] }
    RemoveFromDB(sendRes, query, SAVED_COLLECTION)
    function sendRes(result) {
        res.send(result)
        res.status(200).end()
    }
})

app.post('/api/user/addUser', function (req, res) {
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
        collection.find(query).sort({ Date: -1 }).toArray(function (err, result) {
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

function selectWithJoinFromDB(callback, query, collectionName) {
    connectToDB(join, collectionName)
    function join(collection) {
        collection.aggregate(query).sort({ Date: -1 }).toArray(function (err, result) {
            if (err) throw err;
            callback(result)
            closeConnction()
        })
    }
}

function createSavedQuery(userID) {
    let joinQuery = [
        {
            $lookup:
            {
                from: "savedRecipes",
                localField: "_id",
                foreignField: "recipeID",
                as: "RightTableData"
            }
        },
        { $unwind: "$RightTableData" },
        { $match: { "RightTableData.userID": userID } },
        {
            $project: {
                "_id": "$_id",
                "userID": "$userID",
                "Name": "$Name",
                "label": "$label",
                "Ingredients": "$Ingredients",
                "Description": "$Description",
                "TimeHours": "$TimeHours",
                "TimeMinutes": "$TimeMinutes",
                "Img": "$Img",
                "Preparation": "$Preparation",
                "Date": "$Date",
                isSaved: { $cond: [{ $eq: [userID, '$RightTableData.userID'] }, true, false] }
            }
        }
    ]

    return joinQuery
}

function createJoinQuery(match) {
    let joinQuery = [
        match,
        {
            $lookup:
            {
                from: "savedRecipes",
                localField: "_id",
                foreignField: "recipeID",
                as: "RightTableData"
            }
        },
        {
            $project: {
                "_id": "$_id",
                "userID": "$userID",
                "Name": "$Name",
                "label": "$label",
                "Ingredients": "$Ingredients",
                "Description": "$Description",
                "TimeHours": "$TimeHours",
                "TimeMinutes": "$TimeMinutes",
                "Img": "$Img",
                "Preparation": "$Preparation",
                "Date": "$Date",
                numOfSaves: { $size: "$RightTableData" },
                isSaved: { $cond: [{ $in: ['$userID', '$RightTableData.userID'] }, true, false] }
            }
        }
    ]

    return joinQuery
}

function RemoveFromDB(callback, query, collectionName) {
    connectToDB(remove, collectionName)
    function remove(collection) {
        collection.remove(query, function (err, result) {
            if (err) throw err;
            callback(result)
            closeConnction()
        })
    }
}
