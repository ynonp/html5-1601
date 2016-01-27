function Counter(el) {
  this.count = 0;
  this.el = el;
  
  el.addEventListener('click', this.inc.bind(this));
}

var CounterActions = {
  inc: function() {
    this.count++;
    this.el.querySelector('.clicks').innerHTML = this.count;
  }
};

Counter.prototype = CounterActions;


var c1 = new Counter(document.querySelector('.counter1'));
var c2 = new Counter(document.querySelector('.counter2'));



/**



// F: Get The container element
var clicker = document.querySelector('.counter');
var btn = clicker.querySelector('button');
var panel = clicker.querySelector('.clicks');

// F: need to keep many counters
var counter = 0;

// F: function is specific to a counter
function handleClick() {
  panel.textContent = String(++counter);
}

btn.addEventListener('click', handleClick);

*/



