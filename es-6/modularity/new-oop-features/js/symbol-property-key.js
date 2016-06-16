/**
 * symbol-property-key created on 6/11/16 6:09 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

const obj = {
    * [Symbol.iterator]() { // (A)
        yield 'hello';
        yield 'world';
    }
};
for (const x of obj) {
    console.log(x);
}
