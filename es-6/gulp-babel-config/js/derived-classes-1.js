/**
 * derived-classes-1 created on 6/30/16 10:10 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

class Point {
    
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Point: ', this.a, this.b);
    }
    
}

class ColorPoint extends Point {
    
    static testMe() {
        
    }
    
    haveFun() {
        console.log('ColorPoint: ', this.a, this.b);
    }
    
} 

const ColorPoint1 = new ColorPoint();

ColorPoint1.haveFun();
