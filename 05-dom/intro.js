/**
 * script.js
 *
 * DOM Interaction:
 *
 * 1. query selector (READ)
 * 2. update the DOM (WRITE)
 * 3. event handling
 */

// the first match
var p = document.querySelector('.text');

// array of all items
var all_p = document.querySelectorAll('p');

for (var i=0; i < 10; i++) {
  // p.innerHTML += '<li>' + i + '</li>';
  p.textContent += '<li>' + i + '</li>';
}













