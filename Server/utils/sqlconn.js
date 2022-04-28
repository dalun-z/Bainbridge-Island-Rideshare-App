/**
 * Exports a MySQL Connection to Database. Expects
 * process environment variables with the following names:
 * 
 * DB_HOST - MySQL host connection address
 * DB_PORT - Port for connection
 * DB_USER - Username for connection
 * DB_PASS - Password for connection
 */

const mysql = require('mysql');
const Logger = require("./Logger");

let con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});


/**
 * Starts the connection to the MySQL server
 * @param {function} callback Function to call after successful connection
 */
function startConnection(callback) {

    if(con._connectCalled) {
        throw "Connection already called"
    }

    Logger.log("Starting MySQL Connection");
    con.connect((err) => {
        if(err) {
            Logger.error("Could not start SQL connection");
            Logger.error(err);
            throw err;
        }

        Logger.log("Successfully connected");
        callback()
    });
}

module.exports = {
    connection: con,
    startConnection: startConnection
};