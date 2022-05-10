/**
 * Exports a MySQL Pool of Connection to Database. Expects
 * process environment variables with the following names:
 *
 * DB_HOST - MySQL host connection address
 * DB_PORT - Port for connection, default 3306
 * DB_USER - Username for connection
 * DB_PASS - Password for connection
 * DB_NAME - Name of database
 *
 * DB_POOL_SIZE - Size of Pool, default 50
 */

const mysql = require("mysql");
const Logger = require("./Logger");

if (!process.env.DB_HOST) {
    throw "No  DB host found";
}

if (!process.env.DB_USER) {
    throw "No DB User found";
}

if (!process.env.DB_PASS) {
    throw "No DB password found";
}

if (!process.env.DB_NAME) {
    throw "No DB name found";
}

if (!process.env.DB_PORT) {
    Logger.warn("No DB port found");
}

if (!process.env.DB_POOL_SIZE) {
    Logger.warn("No DB pool size limit found");
}

class SQL {
    dbPool;

    /**
     * Constructs a mysql pool connection to be used for future queries.
     * @param poolArgs Arguments for the pool
     */
    constructor(poolArgs) {
        this.poolArgs = poolArgs;

        this.dbPool = mysql.createPool(this.poolArgs);

        // Test MySQL connection or return error
        let tPromise = new Promise((resolve, reject) => {
            this.dbPool.getConnection((err, conn) => {
                resolve({ err, conn });
            });
        });

        tPromise.then((result) => {
            if (result.err) {
                Logger.err("Error connecting to MySQL Database");
                throw result.err;
            }

            result.conn.release();
        });

        Logger.log("Successfully connected to MySQL Database");
    }


    /**
     * Performs a query on the database using the database pool
     * @param qParams Parameters for query, expects object or query string
     * @returns Returns a promise wrapped around a dbPool query.
     */
    query(qParams) {
        return new Promise((resolve, reject) => {
            this.dbPool.query(qParams,
                (err, results, fields) => {
                    resolve({err, results, fields});
                });
        });
    }
}

let poolArgs = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_POOL_SIZE || 50,
};

let theSQL = new SQL(poolArgs);

module.exports = theSQL;
