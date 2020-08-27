var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://localhost:27017/recipes';
let mydb
let countMydb = 0

function connectToDB(callback, collectionName) {
    if (!mydb || !mydb.isConnected()) {
        MongoClient.connect(uri, function (err, db) {
            if (!err) {
                if (!mydb) {
                    mydb = db
                    console.log("connected");
                }
                createCollection(callback, db, collectionName)
            }
        })
    } else {
        createCollection(callback, mydb, collectionName)
    }
}

function createCollection(callback, db, collectionName) {
    dbo = db.db("recipes");
    countMydb++
    callback(dbo.collection(collectionName))
}

function closeConnction() {
    if (mydb) {
        if (countMydb > 0) {
            countMydb--
        }
        if (countMydb === 0) {
            console.log("close")
            mydb.close();
            MongoClient.close;
        }
    }
}
module.exports = {

    selectFromDB: (callback, query, collectionName) => {
        connectToDB(find, collectionName)
        function find(collection) {
            collection.find(query).toArray(function (err, result) {
                if (err) throw err;
                callback(result)
                closeConnction()
            })
        }
    },

    addToDB: (callback, document, collectionName) => {
        connectToDB(insert, collectionName)
        function insert(collection) {
            document.Date = new Date().toJSON()
            collection.insertOne(document, function (err, result) {
                if (err) throw err;
                callback(result.insertedId.toString())
                closeConnction()
            })
        }
    },

    createOrUpdate: (callback, user, collectionName) => {
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
    },

    selectWithJoinFromDB: (callback, query, collectionName) => {
        connectToDB(join, collectionName)
        function join(collection) {
            collection.aggregate(query).sort({ Date: -1 }).toArray(function (err, result) {
                if (err) throw err;
                callback(result)
                closeConnction()
            })
        }
    },

    RemoveFromDB: (callback, query, collectionName) => {
        connectToDB(remove, collectionName)
        function remove(collection) {
            collection.remove(query, function (err, result) {
                if (err) throw err;
                callback(result)
                closeConnction()
            })
        }
    },

    UpdateOne: (callback, query, updateData, collectionName) => {
        connectToDB(update, collectionName)
        function update(collection) {
            collection.updateOne(query, updateData, function (err, result) {
                if (err) throw err;
                callback(result)
                closeConnction()
            })
        }
    }

}