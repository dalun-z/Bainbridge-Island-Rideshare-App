const { Logger, SQL, Authenticator, CommonResponse } = require("../utils");
const express = require("express");

let router = express.Router();

/**
 * Adds a vehicle to the database
 * @param {json} req Body must contain license plate, and owner uid
 */
router.post("/add", async (req, res) => {

    let authParams = {};
    let owner = req.body.owner;
    let plate = req.body.plate;



    if (plate && owner) {
        if (Authenticator.signedInAs(authParams)) {


            let testExistsQ = "SELECT * FROM vehicles WHERE plate = ?";

            let resultExists = await SQL.query({
                sql: testExistsQ,
                values: [plate]
            });

            if (resultExists.err) {
                CommonResponse.FailedQuery(req, res);
                throw err;
            }

            if (resultExists.results.length > 0) {
                Logger.error(owner, "Tried adding license plate that already exists", plate);
                CommonResponse.InvalidQuery(req, res);
            } else {
                let addQuery = "INSERT INTO vehicles VALUES (?, ?)";

                let resultAdd = await SQL.query({
                    sql: addQuery,
                    values: [plate, owner]
                });

                if (resultAdd.err) {
                    CommonResponse.FailedQuery(req, res);
                    Logger.error(resultAdd.err);
                } else {
                    res.status(200).send();
                }
            }

        } else {

            CommonResponse.Unauthorized(req, res);
        }


    } else {
        res.status(400).json({
            error: "Missing required parameters"
        });

    }
});

/**
 * Returns list of vehicles owned by user 
 * @param {json} req Body must contain the uuid of the user needing to be searched.
 *      user: uuid
 */
router.get("/list", async (req, res) => {
    let user = req.body.user;

    
    if (user) {

        if(Authenticator.signedInAs(user)) {
            let query = "SELECT plate FROM vehicles WHERE owner = ?"; 

            let result = await SQL.query({
                sql: query,
                values: [user]
            });

            if(result.err) {
                CommonResponse.FailedQuery(req, res);
                Logger.error(result.err);
                return;
            } else {
                res.status(200).json(result.results);
            }

        } else {
            CommonResponse.Unauthorized(req, res);
        }
    } else {
        CommonResponse.MissingParameters(req, res);
    }

});

module.exports = router;