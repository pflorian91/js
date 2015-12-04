/**
 * Need to have more than one instance of similar objects?
 *
 * Defines the common behaviour of objects
 * Provides a way of constructing these objects
 */
module.exports = Logger;

var extend = require('util')._extend,
    fs = require('fs');

const defaultOptions = {
    path: '/tmp/log.txt',
    defaultLevel: 'info'
};

function Logger(options) {
    var self = log,
        opts = extend({}, defaultOptions),
        file;

    opts = extend(opts, options || {});
    file = fs.createWriteStream(opts.path);

    function log(what, level) {
        var date = new Date,
            entry = {
                when: date.toJSON(),
                level: level || opts.defaultLevel,
                what: what
            };
        file.write(JSON.stringify(entry) + '\n');
    };

    self.info = function(what) {
        log(what, 'info');
    };

    self.warn = function(what) {
        log(what, 'warning');
    };

    self.critical = function(what) {
        log(what, 'critical');
    };

    return self;
}

/**
 * Sample usages
 * Instantiates two different loggers
 *
 *
var Logger = require('./closure_class_logger'),
    log1 = Logger(),
    log2 = Logger({
        path: '/tmp/log2.txt',
        defaultLevel: 'warn'
    });

log1('one');
log1.info('two');
log2('three');
log2.critical('four');
 *
 * Using function closures is a good way of clearly differentiating between what is the object internal
state and the object public interface, simulating what other languages define as private properties
and methods.
 * The downside is that, using this technique, you are defining a new function scope that
persists throughout the life of the object, and a set of functions on that scope for each object you are
creating, consuming memory and taking CPU time at initialisation.
 * This may be fine if, like in this client example, you’re not defining many instances of each object. If you want to avoid this problem,
then you will need to use the prototype-based modelling capabilities that JavaScript provides.
 * */
