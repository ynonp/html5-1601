/**
 * 1. Comments: /* ... //
 * 2. Variables
 * 3. Data Types
 * 4. Operators
 * 5. If, While, For, switch
 * 6. Functions
 */


// Keyword var defines a new variable
var name = 'ynon';
var t = 7;
var x = 15;
// Numbers are: double

var email = name + '@ynonperek.com';
var z = t + x;

var items = ['one', 'two', 'three'];
items.push('four');

for (var i=0; i < items.length; i++ ) {
  console.log('Hello!' + i);
}

var colors = {
  warm: 'orange',
  sad: 'blue',
  happy: 'purple',
  angry: 'red'
};

console.log('The color for sad is: ' + colors.sad);
console.log('The color for happy is: ' + colors['happy']);




console.log(items[1]);
console.log('HellO: ' + email);



if ( 2 < 3 ) {
  console.log('ok, 2 < 3');
} else {
  console.log('really???');
}








