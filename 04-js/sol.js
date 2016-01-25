function random(from, to) {
 if ( typeof to === 'undefined' ) {
    to = from;
    from = 0;
  }
  var range = to - from + 1;
  return Math.floor((Math.random() * range)) + from;
}

function s1() {
  var x = random(0,100);
  var y = random(0,100);
  var z = random(0,100);

  console.log('x = ' + x + ', y = ' + y + ', z = ' + z);
  console.log(Math.max(x, y, z));
}

function s2() {
  var n = random(1000, 9999);
  var digit, sum = 0;
  console.log('n = ' + n);

  while (n !== 0) {
    digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }
  console.log('sum = ' + sum);
}

function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}

function s4(a, b) {
  return a * b / gcd(a,b);
}














