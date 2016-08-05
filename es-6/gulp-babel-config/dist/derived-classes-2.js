'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * derived-classes-2 created on 6/30/16 10:13 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

var Foo = function () {
    function Foo(x, y) {
        _classCallCheck(this, Foo);

        this.x = x;
        this.y = y;
    }

    _createClass(Foo, null, [{
        key: 'classMethod',
        value: function classMethod() {
            return 'hello';
        }
    }]);

    return Foo;
}();

var Bar = function (_Foo) {
    _inherits(Bar, _Foo);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).apply(this, arguments));
    }

    return Bar;
}(Foo);

var output = Bar.classMethod();

console.log(output);

var myBar = new Bar();