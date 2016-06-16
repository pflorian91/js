console.log(...[-1,7,2]);

var myMax = Math.max(...[-1,7,2]);
console.log(myMax);

function format(pattern, ...params) {

  // this.resultWithSpread = format(...['a', 'b', 'c']);

  return params;
}

var resultedFormat = format('a', 'b', 'c');
console.log(resultedFormat);

// --------------

var resultWithSpread = format(...['a', 'b', 'c']);
console.log(resultWithSpread);

class SpreadClass {

  constructor () {
//    let blabla = 'fooboar';
  }

  format(pattern, ...params) {
    return params;
  }

}

// 0------
let SpreadInstance = new SpreadClass();
let fromClass = SpreadInstance.format(...['a', 'b', 'c']);
console.log(fromClass, 'fromClass');
