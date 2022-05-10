const userRoutes = require("./user");
const rideRoutes = require("./ride");


/**
 * Registers an app to use all the routes
 * @param {express app} app Express app instance that will be registered to use
 * all the routes in the directory
 */
function register(app) {
    app.use("/user", userRoutes);
    app.use("/ride", rideRoutes);
}

module.exports.register = register;