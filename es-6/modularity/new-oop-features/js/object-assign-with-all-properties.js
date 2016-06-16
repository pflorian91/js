/**
 * object-assign-with-all-properties created on 6/11/16 6:12 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

const objTarget  = {a: 1};
const source1 = {b: 2};
const source3 = {c: 3, get foo() { return 3; }};

function copyAllProperties(target, ...sources) {
    for (const source of sources) {
        for (const key of Reflect.ownKeys(source)) {
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
    return target;
}

Object.assign(objTarget, source1, source3);
console.log(JSON.stringify(objTarget));
