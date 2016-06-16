/**
 * assign created on 6/11/16 6:02 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

const obj = { foo: 123 };
Object.assign(obj, { bar: true });
console.log(JSON.stringify(obj));

// > node dist/assign.js
// {"foo":123,"bar":true}
