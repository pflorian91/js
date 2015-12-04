/**
 * Provides one instance of one object in each Node.js process.
 */

exports = module.exports = log;

var fs = require('fs'),
    file = fs.createWriteStream('/tmp/log.txt');

const DEFAULT_LEVEL = 'info';

function log(what, level) {
    var entry = {
        when: new Date,
        level: level || DEFAULT_LEVEL,
        what: what
    };
    file.write(JSON.stringify(entry) + '\n');
};

exports.info = function(what) {
    log(what, 'info');
};

exports.warn = function(what) {
    log(what, 'warning');
};

exports.critical = function(what) {
    log(what, 'critical');
};
