/**
 * main111 created on 7/5/16 12:02 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

import { counter, incCounter } from './lib1';

// The imported value `counter` is live
console.log(counter); // 3
incCounter();
console.log(counter); // 4
