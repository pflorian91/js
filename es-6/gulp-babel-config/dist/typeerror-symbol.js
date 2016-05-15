'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

console.log(Symbol() === Symbol());

var sym = Symbol('desc');
console.log(sym, typeof sym === 'undefined' ? 'undefined' : _typeof(sym));
var str1 = '' + sym; // TypeError
var str2 = '' + sym; // TypeError