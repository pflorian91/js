/**
 * getters-and-setters created on 6/11/16 6:05 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

const obj = {
    get foo() {
        console.log('GET foo');
        return 123;
    },
    set bar(value) {
        console.log('SET bar to '+value);
// return value is ignored
    }
};

// obj.foo
// obj.bar = 2
