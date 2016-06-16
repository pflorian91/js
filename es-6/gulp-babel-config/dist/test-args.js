'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _console;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(_console = console).log.apply(_console, [-1, 7, 2]);

var myMax = Math.max.apply(Math, [-1, 7, 2]);
console.log(myMax);

function format(pattern) {
  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  // this.resultWithSpread = format(...['a', 'b', 'c']);

  return params;
}

var resultedFormat = format('a', 'b', 'c');
console.log(resultedFormat);

// --------------

var resultWithSpread = format.apply(undefined, ['a', 'b', 'c']);
console.log(resultWithSpread);

var SpreadClass = function () {
  function SpreadClass() {
    //    let blabla = 'fooboar';

    _classCallCheck(this, SpreadClass);
  }

  _createClass(SpreadClass, [{
    key: 'format',
    value: function format(pattern) {
      for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      return params;
    }
  }]);

  return SpreadClass;
}();

// 0------


var SpreadInstance = new SpreadClass();
var fromClass = SpreadInstance.format.apply(SpreadInstance, ['a', 'b', 'c']);
console.log(fromClass, 'fromClass');