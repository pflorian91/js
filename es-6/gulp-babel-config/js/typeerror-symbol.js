console.log(Symbol() === Symbol());

const sym = Symbol('desc');
console.log(sym, typeof sym);
const str1 = '' + sym; // TypeError
const str2 = `${sym}`; // TypeError
