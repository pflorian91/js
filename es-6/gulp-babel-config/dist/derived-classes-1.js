'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * derived-classes-1 created on 6/30/16 10:10 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

var Point = function Point(a, b) {
    _classCallCheck(this, Point);

    this.a = a;
    this.b = b;
    console.log('Point: ', this.a, this.b);
};

var ColorPoint = function (_Point) {
    _inherits(ColorPoint, _Point);

    function ColorPoint() {
        _classCallCheck(this, ColorPoint);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPoint).apply(this, arguments));
    }

    _createClass(ColorPoint, [{
        key: 'haveFun',
        value: function haveFun() {
            console.log('ColorPoint: ', this.a, this.b);
        }
    }], [{
        key: 'testMe',
        value: function testMe() {}
    }]);

    return ColorPoint;
}(Point);

var ColorPoint1 = new ColorPoint();

ColorPoint1.haveFun();