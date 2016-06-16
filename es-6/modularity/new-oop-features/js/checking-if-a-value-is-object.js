/**
 * checking-if-a-value-is-object created on 6/11/16 8:34 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

const ReferenceType = {
    [Symbol.hasInstance](value) {
        return (value !== null
        && (typeof value === 'object'
        || typeof value === 'function'));
    }
};
const obj1 = {};
console.log(obj1 instanceof Object); // true
console.log(obj1 instanceof ReferenceType); // true
const obj2 = Object.create(null);
console.log(obj2 instanceof Object); // false
console.log(obj2 instanceof ReferenceType); // true
