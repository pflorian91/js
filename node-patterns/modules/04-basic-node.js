/**
 * Proves the node module system - CommonJS
 * Exports a value
 */
exports.round = function(amount) {
    return Math.round(amount * 100) / 100;
};

/**
 *  The module variable represents the current module, and the value that the module.exports attribute has is what gets returned to the users of this module.
 */
module.exports = function round(amount) {
    return Math.round(amount * 100) / 100;
};

/**
 * Both the exports and the module objects are implicit module variables that the Node module system
makes available.
 */
