const { ObjectId } = require('mongodb');
const GLOBAL = require('../constants')
const QUERY = require('./Queries')
const DB = require('./DB')
const fs = require('fs');
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})

function deleteImages(files) {
    for (var file of files) {
        let path = `C:\/Users\/danie\/Desktop\/git\/my-recipes\/uploads\/${file}`
        fs.unlinkSync(path);
    }
}

var upload = multer({
    storage: storage,
    // fileFilter: function (req, file, callback) {
    //     var ext = file.originalname.split('.').pop();
    //     if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
    //         return callback(new Error('Only images are allowed'))
    //     }
    //     callback(null, true)
    // }
});


module.exports = {
    initApi: (app) => {
        app.get('/api/recipe/popularRecipes', function (req, res) {
            let query = QUERY.createPopularQuery(req.query.userID)
            DB.selectWithJoinFromDB(sendRes, query, GLOBAL.RECIPES_COLLECTION)
            function sendRes(result) {
                res.send(result);
            }
        })

        app.get('/api/recipe/allByUser', function (req, res) {
            let match = { $match: { userID: req.query.userID } };
            let query = QUERY.createJoinQuery(match, req.query.userID)
            DB.selectWithJoinFromDB(sendRes, query, GLOBAL.RECIPES_COLLECTION)
            function sendRes(result) {
                res.send(result);
                res.status(200).end()
            }
        })

        app.get('/api/recipe/allSavedByUser', function (req, res) {
            let query = QUERY.createSavedQuery(req.query.userID)
            DB.selectWithJoinFromDB(sendRes, query, GLOBAL.RECIPES_COLLECTION)
            function sendRes(result) {
                res.send(result);
                res.status(200).end()
            }
        })

        app.get('/api/recipe/allRecipes', function (req, res) {
            let match = { $match: {} }
            let query = QUERY.createJoinQuery(match, req.query.userID);
            DB.selectWithJoinFromDB(sendRes, query, GLOBAL.RECIPES_COLLECTION)
            function sendRes(result) {
                res.send(result);
            }
        })

        app.get('/api/search', function (req, res) {
            var regex = new RegExp(req.query.search);
            var match = {
                $match: {
                    $or: [
                        { Description: { $regex: regex } },
                        { Ingredients: { $elemMatch: { item: { $regex: regex } } } },
                        { Name: { $regex: regex } },
                        { Preparation: { $elemMatch: { details: { $regex: regex } } } }
                    ]
                }
            }

            let query = QUERY.createJoinQuery(match, req.query.userID);
            DB.selectWithJoinFromDB(sendRes, query, GLOBAL.RECIPES_COLLECTION);
            function sendRes(result) {
                res.send(result);
            }
        })

        app.get('/api/recipe/recipeByID', function (req, res) {
            let match = { $match: { _id: ObjectId(req.query.id) } }
            let query = QUERY.createJoinQuery(match, req.query.userID)
            DB.selectWithJoinFromDB(sendRes, query, GLOBAL.RECIPES_COLLECTION);
            function sendRes(result) {
                if (result.length === 0) {
                    res.status(500).send('not found');
                } else {
                    res.send(result[0]);
                }
            }
        })

        app.post('/api/recipe/add', upload.any(), (req, res) => {
            let addQurey = JSON.parse(req.body.recipe)
            addQurey.Img = []
            req.files.map(x => addQurey.Img.push(x.filename))
            DB.addToDB(sendRes, addQurey, GLOBAL.RECIPES_COLLECTION)
            function sendRes(insertID) {
                res.send(insertID)
                res.status(200).end()
            }
        })

        app.post('/api/recipe/likeRecipe', function (req, res) {
            let query = { userID: req.body.like.userID, recipeID: ObjectId(req.body.like.recipeID) }
            DB.addToDB(sendRes, query, GLOBAL.SAVED_COLLECTION)
            function sendRes(insertID) {
                res.send(insertID)
                res.status(200).end()
            }
        })

        app.post('/api/recipe/unlikeRecipe', function (req, res) {
            let recipeID = ObjectId(req.body.unlike.recipeID)
            let query = { $and: [{ userID: req.body.unlike.userID }, { recipeID: recipeID }] }
            DB.RemoveFromDB(sendRes, query, GLOBAL.SAVED_COLLECTION)
            function sendRes(result) {
                res.send(result)
                res.status(200).end()
            }
        })

        app.post('/api/user/addUser', function (req, res) {
            DB.createOrUpdate(sendRes, req.body.user, GLOBAL.USERS_COLLECTION)
            function sendRes(result) {
                res.send(result)
                res.status(200).end()
            }
        })

        app.post('/api/recipe/update', upload.any(), function (req, res) {
            let data = JSON.parse(req.body.recipe)
            let recipeID = data.recipeID
            let query = { $and: [{ userID: data.userID }, { _id: ObjectId(data.recipeID) }] }
            delete data.recipeID
            delete data.userID
            let setObj = {}
            if (req.files.length > 0) {
                setObj.Img = []
                req.files.map(x => setObj.Img.push(x.filename))
                deleteImages(JSON.parse(req.body.oldImages))
            }
            Object.keys(data).forEach(key => setObj[key] = data[key])
            setObj.Date = new Date().toJSON()
            let updateData = { $set: setObj }
            DB.UpdateOne(sendRes, query, updateData, GLOBAL.RECIPES_COLLECTION)
            function sendRes() {
                res.send(recipeID)
                res.status(200).end()
            }
        })

        app.post('/api/recipe/delete', function (req, res) {
            let recipeQuery = { $and: [{ userID: req.body.userID }, { _id: ObjectId(req.body.id) }] }
            let savedQuery = { recipeID: ObjectId(req.body.id) }
            DB.RemoveFromDB(deleteSaved, recipeQuery, GLOBAL.RECIPES_COLLECTION)
            function deleteSaved() {
                DB.RemoveFromDB(sendRes, savedQuery, GLOBAL.SAVED_COLLECTION)
                deleteImages(req.body.images)
            }
            function sendRes(result) {
                res.send(result)
                res.status(200).end()
            }
        })

    }
}