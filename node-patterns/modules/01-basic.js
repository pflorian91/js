/**
 * Cache object
 */
var Cache = (function() {
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
}());

/**
 * currency module
 */
var currency = (function() {
    var cache = Cache(100);
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
}());

[12, 12.34, 12.345].forEach(function(val) {
    var rounded = currency.round(val);
    console.log('rounded ' + val + ' is ' + rounded);
});
