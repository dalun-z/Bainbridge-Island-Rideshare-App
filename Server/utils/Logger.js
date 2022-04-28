const levels = ["log", "warn", "error", "info", "debug"];

/**
 * Logger object for server application
 * Currently has minimal functionality and simply redirects to console
 */
class Logger {

    constructor() {
       // Set up for later if needed 
    }

    log(message) {
        console.log(message);
    }

    warn(message) {
        console.warn(message);
    }

    error(message) {
        console.error(message)
    }
}

const TheLogger = new Logger();

module.exports = TheLogger;