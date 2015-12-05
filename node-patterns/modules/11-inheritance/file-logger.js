/**
 * Implementation of BaseLogger
 * This specific implementation defines a constructor named FileLogger that inherits from the
BaseLogger class
 *
 * For setting up inheritance it uses Node.js’s util.inherits utility function to set up the
protoype chain correctly.
 */
var fs = require('fs'),
    inherits = require('util').inherits,
    BaseLogger = require('./base-logger');

module.exports = FileLogger;
inherits(FileLogger, BaseLogger);

const DEFAULT_PATH = '/tmp/log.txt';

function FileLogger(options) {
    if (!(this instanceof FileLogger)) {
        return new FileLogger(options);
    }

    // The specific constructor has to call the super-class constructor to make sure the this object gets constructed correctly
    // It then relies on the private _options attribute that should have been set after the base constructor has been called.
    BaseLogger.call(this, options);
    this._file = fs.createWriteStream(this._options.path || DEFAULT_PATH);
}

FileLogger.prototype._log = function(entry) {
    this._file.write(JSON.stringify(entry) + '\n');
};
/**
 * Here we’re seing some problems with inheritance that are not particular to JavaScript. Sub-classes may have to know implementation details of the super-class (such as the private _options attribute) in order to work.
 *
 * It also may lead to implementation dependency: if a sub-class uses a specific private attribute of the object, then the base class cannot freely use it in the future.
 *
 * This makes object-oriented code somewhat brittle in nature. For this reason some programmers prefer to compose objects rather than extend classes.
 *
 * Sample usage:
 var MyFileLogger = require('./file-logger')();
 MyFileLogger.log();
 MyFileLogger.info();
 MyFileLogger.warn();
 MyFileLogger.critical();
 */
