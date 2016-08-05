/**
 * derived-classes-2 created on 6/30/16 10:13 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

class Foo {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static classMethod() {
        return 'hello';
    }
}




class Bar extends Foo {

}



let output = Bar.classMethod();

console.log(output);

const myBar = new Bar();
