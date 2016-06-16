/**
 * cloning-objects created on 6/11/16 6:26 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

function clone(orig) {
    return Object.assign({}, orig);
}


function cloneWithPrototype(orig) {
    const origProto = Object.getPrototypeOf(orig);
    return Object.assign(Object.create(origProto), orig);
}
