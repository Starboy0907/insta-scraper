const router = require("express").Router();
const { instagram } = require("instagram-scraper-api");
//get the database object from the config file by importing the getDB method
const{ getDB }  = require('../../config/db_connection');

//configure a simple get request on the router
router.post("/api/get-user-data", async (req, res) => {
    // return if username is empty    
    const username = req.body.username
    const data = await instagram.user(username);
    console.log(data);
    res.json(data);
    });

    //get the username passed from the front end
    // try {
    //     //const data = await instagram.user(username);
    //     //console.log(data);
    //     //res.json(data);
    // }


module.exports = router;