function Counter(el) {
  this.count = 0;
  this.el = el;
  this._handlers = {};
  
  el.addEventListener('click', this.inc.bind(this));
}

Counter.prototype.inc = function() {
  this.count++;
  this.el.querySelector('.clicks').innerHTML = this.count;

  if (typeof this._handlers.large === 'function') {
    if (this.count > 10) {
      this._handlers.large();
    }
  }
};

Counter.prototype.addEventListener = function(name, handler) {
  this._handlers[name] = handler;
}; 


var c1 = new Counter(document.querySelector('.counter1'));
var c2 = new Counter(document.querySelector('.counter2'));

c1.addEventListener('large', function() {
  alert('C1 win!!');
});

c2.addEventListener('large', function() {
  alert('C2 win!!');
});

