const {Logger, SQL, Authenticator, CommonResponse} = require("../utils");
const express = require("express");
const utils = require("nodemon/lib/utils");

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
        let qPromise = new Promise( (resolve, reject) => {
            SQL.connection.query({
                sql: query,
                values: qValues,
                database: "birs"
            }, (err, results, fields) => {
                resolve({err, results, fields});
            });
        });

        let result = await qPromise;

        if(result.err) {
            CommonResponse.FailedQuery(req, res);
        }

        if(result.results.length  == 0) {
            CommonResponse.InvalidQuery(req, res);
        }

        res.status(200).json(result.results[0]);
    } else {

    }
});


module.exports = router;