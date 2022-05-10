const Logger = require("../utils/Logger");
const express = require("express");

/**
 * File contains the routes for all ride related endpoints
 * 
 * The file should export a router that can be used by an express app
 */

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Response from ride");
});

module.exports = router;