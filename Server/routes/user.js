const {Logger, SQL, Authenticator, CommonResponse} = require("../utils");
const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Test 123");
});


/**
 * Request to get user profile information of user identified by given uuid
 */
router.get("/:uuid/profile", async (req, res) => {
    let authParams = {};
    let query = 'SELECT * FROM users WHERE uuid = ?';
    let qValues = [req.params.uuid];

    if(Authenticator.signedInAs(authParams)) {
        let result = await SQL.query({
            sql: query,
            values: qValues,
            database: "birs"
        });

        if(result.err) {
            CommonResponse.FailedQuery(req, res);
            throw result.err;
        }

        if(result.results.length  == 0) {
            CommonResponse.InvalidQuery(req, res);
        }

        res.status(200).json(result.results[0]);
    } else {

    }
});

router.post("/:uuid/profile", async (req, res) => {
    let authParams = {};

    if(Authenticator.signedInAs(authParams)) {
        //Write Query and Figure out What is required to Add User to table
        let queryString = "";

    } else {
        CommonResponse.Unauthorized(req, res);
    }
});


/**
 * Updates User Profile information if authorized 
 * 
 * Requires the request body to be a json object with the following properties:
 * fname - FUll NAME
 * profilepic - Profile Pic HASH/ID
 * phone - Phone Number String
 * email - Email Address
 * dob - Date of birth
 * quota - Quota number
 */
router.put("/:uuid/profile", async(req, res) => {
    let authParams = {};

    if(Authenticator.signedInAs(authParams)) {
        // Write Query To Update Database Table
    } else {
        CommonResponse.Unauthorized(req, res);
    }
});


module.exports = router;