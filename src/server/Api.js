const { ObjectId } = require('mongodb');
const GLOBAL = require('../constants')
const QUERY = require('./Queries')
const DB = require('./DB')

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
                        { Item: { $regex: regex } },
                        { Name: { $regex: regex } },
                        { Preparation: { $regex: regex } }
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
                res.send(result[0]);
            }
        })

        app.post('/api/recipe/add', function (req, res) {
            DB.addToDB(sendRes, req.body.recipe, GLOBAL.RECIPES_COLLECTION)
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

    }
}