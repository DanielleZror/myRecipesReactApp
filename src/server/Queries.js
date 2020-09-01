const GLOBAL = require('../constants')

module.exports = {

    createSavedQuery: (userID) => {
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
                    "PrepTimeHours": "$PrepTimeHours",
                    "PrepTimeMinutes": "$PrepTimeMinutes",
                    "CookTimeHours": "$CookTimeHours",
                    "CookTimeMinutes": "$CookTimeMinutes",
                    "Img": "$Img",
                    "Preparation": "$Preparation",
                    "Date": "$Date",
                    isSaved: { $cond: [{ $eq: [userID, '$RightTableData.userID'] }, true, false] }
                }
            }
        ]

        return joinQuery
    },

    createPopularQuery: (userID) => {
        let popularQuery = [
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
                    "PrepTimeHours": "$PrepTimeHours",
                    "PrepTimeMinutes": "$PrepTimeMinutes",
                    "CookTimeHours": "$CookTimeHours",
                    "CookTimeMinutes": "$CookTimeMinutes",
                    "Img": "$Img",
                    "Preparation": "$Preparation",
                    "Date": "$Date",
                    numOfSaves: { $size: "$RightTableData" },
                    isSaved: { $cond: [{ $in: [userID, '$RightTableData.userID'] }, true, false] }
                }
            },
            { "$sort": { "numOfSaves": -1 } },
            { $limit: GLOBAL.POPULAR_RECIPES_NUMBER }
        ]

        return popularQuery
    },

    createJoinQuery: (match, userID) => {
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
                    "Ingredients": "$Ingredients",
                    "Description": "$Description",
                    "NumberOfDishes": "$NumberOfDishes",
                    "PrepTimeHours": "$PrepTimeHours",
                    "PrepTimeMinutes": "$PrepTimeMinutes",
                    "CookTimeHours": "$CookTimeHours",
                    "CookTimeMinutes": "$CookTimeMinutes",
                    "Img": "$Img",
                    "Preparation": "$Preparation",
                    "Date": "$Date",
                    numOfSaves: { $size: "$RightTableData" },
                    isSaved: { $cond: [{ $in: [userID, '$RightTableData.userID'] }, true, false] }
                }
            }
        ]

        return joinQuery
    },

    userJoinQuery: (match) => {
        let joinQuery = [
            match,
            {
                $lookup:
                {
                    from: "recipes",
                    localField: "userID",
                    foreignField: "userID",
                    as: "RightTableData"
                }
            },
            {
                $project: {
                    "userID": "$userID",
                    "Name": "$Name",
                    "Email": "$Email",
                    numOfRecipes: { $size: "$RightTableData" }
                }
            }
        ]

        return joinQuery
    }
}