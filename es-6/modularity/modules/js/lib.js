/**
 * lib created on 7/4/16 11:29 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
