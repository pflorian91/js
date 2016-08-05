/**
 * species-pattern created on 7/4/16 10:57 PM.
 *
 * @description Sometimes a method creates new instances of its class. If you create a subclass – should the method return an instance of its class or an instance of the subclass?
 * @author Florian Popa <florian@webgenerals.com>
 */

function SpeciesConstructor(O, defaultConstructor) {

    const C = O.constructor;

    if (C === undefined) {
        return defaultConstructor;
    }

    if (! isObject(C)) {
        throw new TypeError();
    }

    const S = C[Symbol.species];

    if (S === undefined || S === null) {
        return defaultConstructor;
    }

    if (! isConstructor(S)) {
        throw new TypeError();
    }

    return S;
}


// Species pattern for arrays
function ArraySpeciesCreate(self, length) {

    let C = undefined;

    // If the receiver `self` is an Array, we use the species pattern
    if (Array.isArray(self)) {
        C = self.constructor;
        if (isObject(C)) {
            C = C[Symbol.species];
        }
    }

    // Either `self` is not an Array or the species pattern didn’t work out:
    // create and return an Array
    if (C === undefined || C === null) {
        return new Array(length);
    }

    if (! IsConstructor(C)) {
        throw new TypeError();
    }

    return new C(length);
}

