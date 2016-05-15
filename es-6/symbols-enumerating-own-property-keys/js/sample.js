const obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Object.defineProperty(obj, 'nonEnum', { enumerable: false });

console.log(Object.getOwnPropertyNames(obj));
// [ 'enum', 'nonEnum' ]

console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol(my_key) ]

// console.log(Reflect.ownKeys(obj));
