/**
 * modules registry
 */
var modules = (function() {
    var modules = {};

    function define(name, fn) {
        modules[name] = fn();
    }

    function require(name) {
        if (!modules.hasOwnProperty(name)) {
            throw new Error('Module ' + name + ' not found');
        }
        return modules[name];
    }
    return {
        define: define,
        require: require
    };
}());


modules.define('cache', function() {
    return function(max) {
        var keys = [];
        var cache = {};
        return {
            get: function(key) {
                return cache[key];
            },
            set: function(key, value) {
                keys.push(key);
                if (keys.length > max) {
                    var oldestKey = keys.shift();
                    delete cache[oldestKey];
                }
                cache[key] = value;
            }
        };
    }
});

modules.define('currency', function() {
    var cache = modules.require('cache')(100);
    return {
        round: function(amount) {
            var rounded = cache.get(amount);
            if (!rounded) {
                rounded = Math.round(amount * 100) / 100;
                cache.set(amount, rounded);
            }
            return rounded;
        }
    };
});


var currency = modules.require('currency');
[12, 12.34, 12.345].forEach(function(val) {
    var rounded = currency.round(val);
    console.log('rounded ' + val + ' is ' + rounded);
});
