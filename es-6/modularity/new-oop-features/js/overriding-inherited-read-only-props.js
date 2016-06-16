/**
 * overriding-inherited-read-only-props created on 6/11/16 7:29 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

const proto = Object.defineProperty({}, 'prop', {
    writable: false,
    configurable: true,
    value: 123,
});
const obj = Object.create(proto);
Object.defineProperty(obj, 'prop', {value: 456});
console.log(obj.prop); // 456
