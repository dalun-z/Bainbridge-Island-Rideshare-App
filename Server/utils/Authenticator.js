const Logger = require("./Logger");

/**
 * Authenticator file will hold a series of authentication functions.
 */

/**
 * Authenticate if a user is signed in to the app
 * @param {Object} params Object of parameters to check
 * @returns True if successfully authenticated, false otherwise
 */
function signedIn(params) {
    return true;
}
/**
 * Authenticate if a user is signed in to the app
 * @param {Object} params Object of parameters to check
 * @returns True if successfully authenticated, false otherwise
 */
function signedInAs(params) {
    return true;
}

module.exports = {
    signedIn,
    signedInAs
};