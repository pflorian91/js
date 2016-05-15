'use strict';

console.log('cegeka includes gek: ' + 'cegeka'.includes('gek'));
console.log('cegeka ends with eka: ' + 'cegeka'.endsWith('eka'));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
     for (var _iterator = 'my supper string'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var ch = _step.value;

          console.log(ch);
     }
} catch (err) {
     _didIteratorError = true;
     _iteratorError = err;
} finally {
     try {
          if (!_iteratorNormalCompletion && _iterator.return) {
               _iterator.return();
          }
     } finally {
          if (_didIteratorError) {
               throw _iteratorError;
          }
     }
}

var robot = { name: "Asimo", year: 2001 };
var capabilities = { intelligence: "HIGH", battery_lifespan: 30 };

var my_message = 'We have a robot named ' + robot.name + '\n     and he is around from ' + robot.year + ' while expecting some ' + capabilities.battery_lifespan + ' years of\n     life without intervention.\n     hello ther\n     sdf\n     gs\n     dg\n     sdf\n     gsd\n     ';

console.log(my_message);