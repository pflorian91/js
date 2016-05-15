'use strict';

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj = (_obj = {}, _defineProperty(_obj, Symbol('my_key'), 1), _defineProperty(_obj, 'enum', 2), _defineProperty(_obj, 'nonEnum', 3), _obj);

Object.defineProperty(obj, 'nonEnum', { enumerable: false });

console.log(Object.getOwnPropertyNames(obj));
// [ 'enum', 'nonEnum' ]

console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol(my_key) ]

// console.log(Reflect.ownKeys(obj));